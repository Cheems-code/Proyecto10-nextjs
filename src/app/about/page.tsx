import Card from '../../components/Card';

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white-900 mb-6">Sobre Nosotros</h2>
        <Card title="Nuestra Misión">
          Ofrecer soluciones digitales innovadoras basadas en tecnologías modernas como Next.js y Tailwind CSS.
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card title="Equipo">Un equipo multidisciplinario apasionado por el desarrollo web.</Card>
          <Card title="Tecnología">Usamos herramientas modernas y escalables para construir aplicaciones web.</Card>
        </div>
      </div>
    </section>
  );
}