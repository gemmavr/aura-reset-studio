import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
