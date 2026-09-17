import './SectionTitle.css';

export default function SectionTitle({ label, title, subtitle, light = false, className = '' }) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''} ${className}`}>
      {label && <span className="section-title__label">{label}</span>}
      {title && <h2 className="section-title__heading">{title}</h2>}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
