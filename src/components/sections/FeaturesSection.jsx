import Container from '../layout/Container';
import FeatureCard from '../ui/FeatureCard';
import { features } from '../../data/features';
import { ctaBanner } from '../../data/project';
import './FeaturesSection.css';

export default function FeaturesSection() {
  return (
    <section className="features" id="tinh-nang">
      <Container>
        <div className="features__header">
          <span className="features__badge">TÍNH NĂNG NỔI BẬT</span>
          <h2 className="features__title">Mọi Công Cụ Cần Thiết Cho Một Cuộc Thi Sáng Tạo</h2>
          <p className="features__subtitle">
            Hệ thống tích hợp đầy đủ tính năng cho toàn bộ vòng đời cuộc thi sáng tạo số.
          </p>
        </div>

        <div className="features__grid">
          {features.map((item) => (
            <div key={item.number} className="features__item">
              <FeatureCard
                number={item.number}
                title={item.title}
                description={item.description}
                highlighted={item.highlighted}
              />
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="features__cta-bar">
          <h3 className="features__cta-text">{ctaBanner.text}</h3>
          <a href={ctaBanner.buttonLink} className="features__cta-button">
            {ctaBanner.buttonText}
          </a>
        </div>
      </Container>
    </section>
  );
}
