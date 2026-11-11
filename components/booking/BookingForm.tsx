"use client";

import { useState } from "react";
import { validateBooking, type BookingErrors } from "@/lib/booking";
import { artists } from "@/lib/artists";
import { btnPrimary } from "@/components/ui/styles";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const fieldClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-ivory placeholder:text-zinc-600 transition focus:border-gold focus:outline-none focus:ring-0";
const labelClass = "mb-1 block text-[10px] uppercase tracking-[0.3em] text-gold";

const placements = ["Forearm", "Upper arm", "Shoulder", "Chest", "Back", "Ribs", "Thigh", "Calf", "Ankle / foot", "Hand", "Neck"];

export function BookingForm({ defaultArtist = "any" }: { defaultArtist?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<BookingErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());

    const { data, errors: clientErrors } = validateBooking(raw);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    // Honeypot: people never see or tick this box. Pretend it worked and send nothing.
    if (raw.botcheck) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const artistName = artists.find((a) => a.slug === data.artist)?.name ?? "No preference";
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject: `New tattoo request from ${data.name}`,
          from_name: "After Light Tattoo website",
          name: data.name,
          email: data.email,
          artist: artistName,
          placement: data.placement,
          message: data.idea,
          botcheck: "",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error("Web3Forms rejected the submission");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-gold/30 bg-zinc-900/50 p-10 text-center">
        <p className="font-display text-3xl text-ivory">Request received.</p>
        <p className="mt-4 text-zinc-400">Thanks — we&apos;ll be in touch by email soon to talk through your idea and availability.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 text-xs uppercase tracking-[0.25em] text-gold-light transition hover:text-ivory">
          Send another request
        </button>
      </div>
    );
  }

  const err = (k: keyof BookingErrors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-sm text-red-400">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof BookingErrors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {/* Web3Forms honeypot checkbox — hidden from people and assistive tech */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" className={fieldClass} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} {...aria("email")} />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="artist" className={labelClass}>Artist</label>
          <select id="artist" name="artist" defaultValue={defaultArtist} className={`${fieldClass} [&>option]:bg-zinc-900`}>
            <option value="any">No preference</option>
            {artists.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="placement" className={labelClass}>Placement</label>
          <input id="placement" name="placement" type="text" list="placement-options" placeholder="e.g. Left forearm" className={fieldClass} {...aria("placement")} />
          <datalist id="placement-options">
            {placements.map((p) => (
              <option key={p} value={p} />
            ))}
          </datalist>
          {err("placement")}
        </div>
      </div>

      <div>
        <label htmlFor="idea" className={labelClass}>Your idea</label>
        <textarea
          id="idea"
          name="idea"
          rows={5}
          placeholder="Subject, style, approximate size, references, anything that matters to you…"
          className={`${fieldClass} resize-y`}
          {...aria("idea")}
        />
        {err("idea")}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your request. Please try again in a moment, or message us on Instagram or Facebook.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className={`${btnPrimary} w-full disabled:opacity-60 md:w-auto`}>
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
