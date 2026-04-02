import { SPOTIFY_EMBED_URL } from "@/lib/content";

export default function Sermons() {
  return (
    <section id="predici" className="bg-cream-warm py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            Predici
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto mb-4" />
          <p className="font-body text-brown-light text-sm">
            Ascultă mesajele noastre pe Spotify.
          </p>
        </div>

        <div className="rounded-sm overflow-hidden border border-cream-border shadow-sm">
          <iframe
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Predici Sfânta Treime pe Spotify"
          />
        </div>
      </div>
    </section>
  );
}
