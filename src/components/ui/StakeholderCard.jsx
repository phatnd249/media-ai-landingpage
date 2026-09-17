import './StakeholderCard.css';

export default function StakeholderCard({ title, subtitle, items, variant = 'primary' }) {
  return (
    <div className={`stakeholder-card stakeholder-card--${variant}`}>
      <div className="stakeholder-card__header">
        <h3 className="stakeholder-card__title">{title}</h3>
      </div>
      <div className="stakeholder-card__body">
        {subtitle && <p className="stakeholder-card__subtitle">{subtitle}</p>}
        <ul className="stakeholder-card__list">
          {items.map((item, index) => (
            <li key={index} className="stakeholder-card__item">
              <span className="stakeholder-card__bullet">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
