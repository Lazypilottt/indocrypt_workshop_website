const GlowingBox = ({ children, className, strongGlow = false }) => {
  const shadowClass = strongGlow ? 'shadow-glow-strong' : 'shadow-glow-medium';
  return (
    <div
      className={`bg-white/20 backdrop-blur-xl rounded-2xl p-5 sm:p-10 border border-white/20 ${shadowClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowingBox;
