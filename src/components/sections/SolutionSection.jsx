import Container from '../layout/Container';
import StakeholderCard from '../ui/StakeholderCard';
import { solutionOverview, stakeholders } from '../../data/solution';
import './SolutionSection.css';

export default function SolutionSection() {
  const topRow = stakeholders.slice(0, 2);
  const bottomRow = stakeholders.slice(2, 4);

  return (
    <section className="solution" id="giai-phap">
      <Container className="solution__container">
        <div className="solution__header">
          <span className="solution__badge">{solutionOverview.label}</span>
          <h2 className="solution__title">{solutionOverview.title}</h2>
          <p className="solution__subtitle">{solutionOverview.subtitle}</p>
        </div>

        <div className="solution__diagram">
          {/* SVG Connector lines for desktop */}
          <svg className="solution__connectors" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
            <line x1="260" y1="120" x2="500" y2="250" stroke="#374B78" strokeWidth="2.5" strokeDasharray="6 6" />
            <line x1="740" y1="120" x2="500" y2="250" stroke="#374B78" strokeWidth="2.5" strokeDasharray="6 6" />
            <line x1="260" y1="380" x2="500" y2="250" stroke="#374B78" strokeWidth="2.5" strokeDasharray="6 6" />
            <line x1="740" y1="380" x2="500" y2="250" stroke="#374B78" strokeWidth="2.5" strokeDasharray="6 6" />
          </svg>

          {/* Central Hub */}
          <div className="solution__center-hub">
            <div className="solution__hub-circle">
              <span className="solution__hub-brand">LHU MEDIA</span>
              <div className="solution__hub-divider"></div>
              <span className="solution__hub-role">HỆ THỐNG TRUNG TÂM</span>
            </div>
          </div>

          {/* Grid of 4 cards */}
          <div className="solution__grid">
            <div className="solution__col solution__col--top-left">
              <StakeholderCard
                title={topRow[0].title}
                subtitle={topRow[0].subtitle}
                items={topRow[0].items}
                variant="primary"
              />
            </div>
            <div className="solution__col solution__col--top-right">
              <StakeholderCard
                title={topRow[1].title}
                subtitle={topRow[1].subtitle}
                items={topRow[1].items}
                variant="primary"
              />
            </div>
            <div className="solution__col solution__col--bottom-left">
              <StakeholderCard
                title={bottomRow[0].title}
                subtitle={bottomRow[0].subtitle}
                items={bottomRow[0].items}
                variant="secondary"
              />
            </div>
            <div className="solution__col solution__col--bottom-right">
              <StakeholderCard
                title={bottomRow[1].title}
                subtitle={bottomRow[1].subtitle}
                items={bottomRow[1].items}
                variant="secondary"
              />
            </div>
          </div>
        </div>

        {/* Core Values Banner */}
        <div className="solution__banner">
          <p className="solution__banner-text">
            <strong>GIÁ TRỊ CỐT LÕI:</strong> TỐI ƯU HÓA VẬN HÀNH • TĂNG CƯỜNG MINH BẠCH • TRẢI NGHIỆM ĐỒNG BỘ
          </p>
        </div>
      </Container>
    </section>
  );
}
