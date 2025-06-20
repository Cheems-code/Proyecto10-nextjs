import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-6xl font-bold text-white-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white-700 mb-6">Página no encontrada</h2>
        <p className="text-white-600 mb-8 max-w-md">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
}