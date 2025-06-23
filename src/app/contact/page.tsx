import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio</title>
        <meta name="description" content="Contáctanos para dudas, sugerencias o comentarios." />
        <meta property="og:title" content="Contacto | Mi Sitio" />
        <meta property="og:description" content="Contáctanos para dudas, sugerencias o comentarios." />
        <meta property="og:type" content="website" />
      </Head>
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white-900 mb-6">Contáctanos</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nombre</label>
                <input type="text" id="name" className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Mensaje</label>
                <textarea id="message" rows={4} className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}