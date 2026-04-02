import { VISION, CORE_VALUES } from "@/lib/content";

export default function Vision() {
  return (
    <section id="viziune" className="bg-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            {VISION.title}
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto mb-6" />
          <p className="font-body text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            {VISION.statement}
          </p>
        </div>

        {/* Core value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-cream-warm border border-cream-border rounded-sm p-6
                         hover:border-amber-muted hover:shadow-sm
                         transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">{value.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-burgundy mb-2">
                {value.title}
              </h3>
              <div className="w-8 h-px bg-amber-gold mx-auto mb-3" />
              <p className="font-body text-brown-light text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
