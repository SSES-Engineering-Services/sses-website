const TechnicalGridBackground = ({
  light = false,
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={
        light
          ? `sses-technical-grid-light ${className}`
          : `sses-technical-grid ${className}`
      }
    />
  );
};

export default TechnicalGridBackground;