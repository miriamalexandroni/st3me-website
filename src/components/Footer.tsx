import Logo from "./Logo";
import { CHURCH_NAME, FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-burgundy-dark text-cream py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <Logo size={44} />
            <span className="font-heading text-lg font-semibold text-amber-gold">
              {CHURCH_NAME}
            </span>
            <p className="font-body text-sm text-cream opacity-70 leading-relaxed">
              O comunitate de credincioși din România.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-amber-gold mb-4">
              Contact
            </h4>
            <div className="w-8 h-px bg-amber-gold mb-4" />
            <address className="not-italic font-body text-sm text-cream opacity-80 space-y-2">
              <p>{FOOTER.address}</p>
              <p>
                <a
                  href={`tel:${FOOTER.phone}`}
                  className="hover:text-amber-light transition-colors"
                >
                  {FOOTER.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="hover:text-amber-light transition-colors"
                >
                  {FOOTER.email}
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-amber-gold mb-4">
              Urmărește-ne
            </h4>
            <div className="w-8 h-px bg-amber-gold mb-4" />
            <ul className="space-y-2">
              {FOOTER.socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream opacity-80 hover:text-amber-gold hover:opacity-100 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-burgundy-light pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-cream opacity-50">
          <span>
            © {new Date().getFullYear()} {CHURCH_NAME}. Toate drepturile rezervate.
          </span>
          <span>Realizat cu dragoste.</span>
        </div>
      </div>
    </footer>
  );
}
