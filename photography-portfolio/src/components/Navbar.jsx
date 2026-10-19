
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    `relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
      isActive
        ? "text-gold"
        : "text-muted hover:text-cream"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-outline bg-background/95 shadow-xl backdrop-blur-xl"
          : "border-outline/50 bg-background/90 backdrop-blur-lg"
      }`}
    >
      <div className="page-container flex h-20 items-center justify-between">
        <Link
          to="/"
          aria-label="FRAME Photography homepage"
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-gold/60 font-display text-2xl text-gold">
            F
          </span>

          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-[0.3em] text-cream">
              FRAME
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
              Photography
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/about#contact"
          className="hidden border border-gold/60 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-background md:inline-flex"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-outline text-cream md:hidden"
        >
          <span
            className={`h-px w-5 bg-current transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-outline bg-surface transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen
            ? "max-h-80 border-t opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-2 px-6 py-6"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-4 py-3 text-sm uppercase tracking-widest ${
                  isActive
                    ? "bg-elevated text-gold"
                    : "text-muted hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/about#contact"
            className="mt-3 border border-gold px-4 py-3 text-center text-xs uppercase tracking-widest text-gold"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
