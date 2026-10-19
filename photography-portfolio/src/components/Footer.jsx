
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline bg-[#0b0908]">
      <div className="page-container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="font-display text-3xl text-cream"
            >
              FRAME<span className="text-gold">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              Timeless photography. Honest storytelling.
              Moments preserved with intention.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-gold" to="/">
                Home
              </Link>
              <Link className="hover:text-gold" to="/about">
                About
              </Link>
              <Link className="hover:text-gold" to="/gallery">
                Gallery
              </Link>
              <Link className="hover:text-gold" to="/about#contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Connect
            </h3>

            <p className="mb-5 text-sm text-muted">
              Available for enquiries and creative collaborations.
            </p>

            <a
              href="mailto:hello@example.com"
              className="text-sm text-cream transition-colors hover:text-gold"
            >
              hello@example.com
            </a>

            <div className="mt-5 flex flex-wrap gap-5 text-xs uppercase tracking-widest text-muted">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Pinterest
              </a>
              <a
                href="https://behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-outline pt-7 text-xs text-muted sm:flex-row">
          <p>© {year} FRAME Photography. All rights reserved.</p>
          <p>Crafted with light & intention.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
