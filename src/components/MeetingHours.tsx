import { MEETING_HOURS } from "@/lib/content";

export default function MeetingHours() {
  return (
    <section id="program" className="bg-cream-warm py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            Program Săptămânal
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto" />
        </div>

        <div className="border border-cream-border rounded-sm overflow-hidden">
          {MEETING_HOURS.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 sm:gap-0
                          ${i % 2 === 0 ? "bg-cream" : "bg-cream-warm"}
                          border-b border-cream-border last:border-0`}
            >
              <span className="font-heading text-burgundy font-semibold sm:w-32 text-sm uppercase tracking-wide">
                {row.day}
              </span>
              <span className="font-body text-amber-gold font-medium sm:w-36 text-sm">
                {row.time}
              </span>
              <span className="font-body text-brown text-sm flex-1">
                {row.event}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-brown-light text-sm mt-6">
          Toate serviciile au loc la sediul bisericii. Vizitatorii sunt bineveniți.
        </p>
      </div>
    </section>
  );
}
