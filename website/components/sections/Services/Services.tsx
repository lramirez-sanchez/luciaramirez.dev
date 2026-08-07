import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="bg-white py-40">

      <div className="mx-auto max-w-6xl px-10">

        <h1
            className="
            mb-44
            text-8xl
            font-bold
            leading-tight
            tracking-tight
            text-zinc-900
          "      
        >
            ¿Qué puedo hacer por ti?
        </h1>

        <ServiceCard
          number="01"
          title="Automatización"
          description="Automatizo procesos repetitivos mediante Python, APIs y herramientas personalizadas para ahorrar tiempo, reducir errores y mejorar la productividad."
          target="automation-projects"
        />

        <ServiceCard
          number="02"
          title="Desarrollo de Software"
          description="Diseño y desarrollo aplicaciones y herramientas adaptadas a cada necesidad, priorizando soluciones sencillas, mantenibles y escalables."
          target="software-projects"
        />

        <ServiceCard
          number="03"
          title="Bases de Datos"
          description="Diseño bases de datos relacionales, consultas SQL y sistemas que permiten organizar, gestionar y explotar la información de forma eficiente."
          target="database-projects"
        />

      </div>

    </section>
  );
}