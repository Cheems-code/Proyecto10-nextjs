// /app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Mi Sitio - Next.js</title>
        <meta name="description" content="Sitio web con Next.js y Tailwind CSS" />
      </head>
      <body className="min-h-screen bg-gray-100 text-gray-800 font-sans antialiased">
        <Navbar />

        <main className="container mx-auto px-6 py-10 max-w-6xl">
          {children}
        </main>
      </body>
    </html>
  );
}