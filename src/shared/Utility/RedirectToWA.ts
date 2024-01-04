import { Environment } from "../Config";

const DEFAULT_MESSAGE =
  "Hi! I need further information about your information or your services.";

export function RedirectToWA(message?: string): void {
  const toOpen = window.open(
    `https://wa.me/081910614008?text=` +
      `${(message || DEFAULT_MESSAGE).replaceAll("\n", "%0A")}`,
    "_blank",
    "noopener,noreferrer"
  );
  if (toOpen) toOpen.opener = null;
}

export function getWhatsappURL(message?: string): string {
  return (
    `https://wa.me/081910614008?text=` +
    `${(message || DEFAULT_MESSAGE).replaceAll("\n", "%0A")}`
  );
}
