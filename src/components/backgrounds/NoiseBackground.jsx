const NoiseBackground = ({
  opacity = "opacity-100",
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`sses-noise ${opacity} ${className}`}
    />
  );
};

export default NoiseBackground;