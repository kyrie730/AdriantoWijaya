import { Environment } from "../Config";

const DEFAULT_MESSAGE =
  "Hi! I need further information about D'Gift crochet bouquets.";

export function RedirectToWA(message?: string) {
  const toOpen = window.open(
    `https://wa.me/${Environment.whatsappPhoneNumber}?text=` +
      `${(message || DEFAULT_MESSAGE).replaceAll("\n", "%0A")}`,
    "_blank",
    "noopener,noreferrer"
  );
  if (toOpen) toOpen.opener = null;
}
