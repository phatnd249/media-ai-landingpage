import Container from '../layout/Container';
import Button from '../ui/Button';
import { project } from '../../data/project';
import './IntroSection.css';

export default function IntroSection() {
  return (
    <section className="intro" id="gioi-thieu">
      <Container className="intro__container">
        <div className="intro__content">
          <h2 className="intro__heading">GIỚI THIỆU</h2>
          <div className="intro__body">
            <div className="intro__text">
              {project.description.map((paragraph, index) => (
                <p key={index} className="intro__paragraph">{paragraph}</p>
              ))}
              <p className="intro__philosophy">{project.philosophy}</p>
            </div>
            <div className="intro__visual">
              <div className="intro__image-card">
                {/* SVG Landscape Illustration matching Image 2 reference */}
                <svg className="intro__illustration" viewBox="0 0 400 320" preserveAspectRatio="none">
                  {/* Sky */}
                  <rect width="400" height="320" fill="#BDE0FE" />
                  
                  {/* Fluffy White Cloud */}
                  <g transform="translate(140, 60)">
                    <path
                      d="M 25,60 
                         A 25,25 0 0,1 40,25 
                         A 35,35 0 0,1 95,20 
                         A 30,30 0 0,1 125,50 
                         A 20,20 0 0,1 120,65 
                         Z"
                      fill="#FFFFFF"
                    />
                  </g>

                  {/* Back Rolling Hill */}
                  <path
                    d="M -20,240 Q 150,180 420,220 L 420,340 L -20,340 Z"
                    fill="#B5D973"
                  />

                  {/* Front Rolling Hill */}
                  <path
                    d="M -20,240 Q 180,210 420,270 L 420,340 L -20,340 Z"
                    fill="#7FA31A"
                  />
                </svg>
              </div>

              <div className="intro__cta-wrapper">
                <Button variant="primary" href={project.links.register} className="intro__demo-btn">
                  Đăng Ký Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
