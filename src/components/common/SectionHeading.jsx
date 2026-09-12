const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${
            align === "center" ? "justify-center" : ""
          } ${
            light ? "text-orange-400" : "text-orange-600"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;