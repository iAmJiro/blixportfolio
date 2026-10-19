
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-3 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-gold text-background hover:bg-cream hover:-translate-y-0.5",
    outline:
      "border border-gold/60 text-gold hover:bg-gold hover:text-background",
    ghost:
      "border border-outline text-cream hover:border-gold hover:text-gold",
  };

  const styles = `${base} ${
    variants[variant] || variants.primary
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

export default Button;
