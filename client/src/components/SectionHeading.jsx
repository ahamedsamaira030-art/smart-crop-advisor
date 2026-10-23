export default function SectionHeading({ title, description, className = "" }) {
  return (
    <div className={`mb-8 max-w-2xl ${className}`}>
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-farm-muted">{description}</p>}
    </div>
  );
}
