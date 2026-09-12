import { Link } from "react-router-dom";

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-200";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600",

    secondary:
      "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy-950",

    outline:
      "border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white",
  };

  const classes = `${baseStyles} ${
    variants[variant]
  } ${className}`;

  // Internal routes
  if (href?.startsWith("/")) {
    return (
      <Link
        to={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Anchor links and external links
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;