import Head from 'next/head';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio</title>
        <meta name="description" content="Bienvenido a la página principal de Mi Sitio. Descubre nuestros servicios y novedades." />
        <meta property="og:title" content="Inicio | Mi Sitio" />
        <meta property="og:description" content="Bienvenido a la página principal de Mi Sitio. Descubre nuestros servicios y novedades." />
        <meta property="og:type" content="website" />
      </Head>

      <section className="bg-blue-450 text-white py-15 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido Usuario</h1>
      </section>
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Inicio">Página principal del sitio web.</Card>
        <Card title="Acerca de">Conoce más sobre nosotros y nuestro trabajo.</Card>
        <Card title="Contacto">Envíanos tus dudas o comentarios.</Card>
      </section>
    </>
  );
}