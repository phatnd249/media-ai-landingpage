import Container from '../layout/Container';
import Button from '../ui/Button';
import { project } from '../../data/project';
import dashboardImage from '../../assets/images/media-ai-dashboard-transparent.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <div className="hero__text-card">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Công Nghệ AI Tiên Phong
            </div>
            <h1 className="hero__title">{project.name}</h1>
            <p className="hero__tagline">{project.tagline}</p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" href={project.links.register}>
                Trải nghiệm ngay
              </Button>
              <Button variant="outline" size="lg" href={project.links.demo}>
                Xem demo
              </Button>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={dashboardImage}
            alt="LHU Media Dashboard — AI Video Analysis Interface"
            className="hero__dashboard-image"
          />
        </div>
      </Container>
    </section>
  );
}
