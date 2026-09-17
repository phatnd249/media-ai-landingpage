import './FeatureCard.css';

export default function FeatureCard({ number, title, description, highlighted = false }) {
  return (
    <div className={`feature-card ${highlighted ? 'feature-card--slate' : 'feature-card--navy'}`}>
      <div className="feature-card__header">
        <h3 className="feature-card__title">
          {number}. {title}
        </h3>
      </div>
      <div className="feature-card__body">
        <p className="feature-card__description">{description}</p>
      </div>
    </div>
  );
}
