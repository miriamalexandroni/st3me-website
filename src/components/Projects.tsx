import { PROJECTS } from "@/lib/content";

export default function Projects() {
  const statusColor = (status: string) =>
    status === "În desfășurare"
      ? "bg-amber-muted text-brown border border-amber-gold"
      : "bg-cream-warm text-brown-light border border-cream-border";

  return (
    <section id="proiecte" className="bg-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            Proiecte Actuale
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="bg-cream-warm border border-cream-border rounded-sm p-6
                         flex flex-col gap-4
                         hover:border-amber-gold hover:shadow-md transition-all duration-300"
            >
              <span
                className={`self-start text-xs font-body font-medium px-3 py-1 rounded-full uppercase tracking-wide ${statusColor(project.status)}`}
              >
                {project.status}
              </span>

              <h3 className="font-heading text-xl font-semibold text-burgundy leading-snug">
                {project.title}
              </h3>

              <div className="w-8 h-px bg-amber-gold" />

              <p className="font-body text-brown-light text-sm leading-relaxed flex-1">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
