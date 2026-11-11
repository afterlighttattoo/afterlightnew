export type BookingInput = {
  name: string;
  email: string;
  /** An artist slug, or "any" for no preference. */
  artist: string;
  placement: string;
  idea: string;
};

export type BookingErrors = Partial<Record<keyof BookingInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Client-side checks run before the form is sent to Web3Forms. */
export function validateBooking(raw: Record<string, unknown>): {
  data: BookingInput;
  errors: BookingErrors;
} {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const data: BookingInput = {
    name: str(raw.name),
    email: str(raw.email),
    artist: str(raw.artist) || "any",
    placement: str(raw.placement),
    idea: str(raw.idea),
  };

  const errors: BookingErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.placement.length < 2) errors.placement = "Where on the body are you thinking?";
  if (data.idea.length === 0) errors.idea = "Please tell us about your idea.";

  return { data, errors };
}
