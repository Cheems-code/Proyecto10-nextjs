import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">Laboratorio 10</div>

        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors duration-200">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-400 transition-colors duration-200">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}