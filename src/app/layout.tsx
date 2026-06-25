import type { Metadata } from "next";
import "./globals.css";

/*
  Plausible Analytics:
  - Verificación: abre https://plausible.io, añade/selecciona el sitio "gemmavr.github.io/aura-reset-studio" y visita la URL pública.
  - En Network debe cargarse https://plausible.io/js/script.js y las conversiones aparecerán como eventos custom:
    "Reservar", "Apuntarme al interés" y "Formulario reserva completado".
  - Si más adelante cambias el dominio público, actualiza data-domain en el script de este archivo.
*/

export const metadata: Metadata = {
  title: "AURA Reset Studio | Experiencias de bienestar en Barcelona y Las Palmas",
  description:
    "Experiencias presenciales de bienestar para bajar el ruido, volver al cuerpo y reservar la próxima Pausa Aura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="gemmavr.github.io/aura-reset-studio"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
