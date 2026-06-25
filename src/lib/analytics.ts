export type PlausibleEventName =
  | "Reservar"
  | "Apuntarme al interés"
  | "Formulario reserva completado";

declare global {
  interface Window {
    plausible?: (eventName: PlausibleEventName) => void;
  }
}

export function trackPlausibleEvent(eventName: PlausibleEventName) {
  if (typeof window === "undefined") {
    return;
  }

  window.plausible?.(eventName);
}
