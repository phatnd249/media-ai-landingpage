import Container from '../layout/Container';
import { project } from '../../data/project';
import { navLinks } from '../../data/navigation';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const banner = project.philosophyBanner;
  const contact = project.contact;

  return (
    <div className="footer-wrapper">
      {/* Upper Pre-Footer CTA: AI CHỈ HỖ TRỢ SẢN XUẤT... */}
      <section className="pre-footer">
        <Container className="pre-footer__container">
          <h2 className="pre-footer__title">
            <span>{banner.titleLine1}</span>
            <span>{banner.titleLine2}</span>
          </h2>
          <p className="pre-footer__subtitle">{banner.subtitle}</p>

          <div className="pre-footer__actions">
            <a href="#register" className="pre-footer__btn pre-footer__btn--primary">
              {banner.btnPrimary}
            </a>
            <a href="#video-analysis" className="pre-footer__btn pre-footer__btn--outline">
              {banner.btnSecondary}
            </a>
          </div>
        </Container>
      </section>

      {/* Main Footer: 3 Columns matching Design Reference */}
      <footer className="footer" id="lien-he">
        <Container>
          <div className="footer__grid">
            {/* Column 1: LIÊN KẾT */}
            <div className="footer__col footer__col--links">
              <h4 className="footer__title">LIÊN KẾT</h4>
              <ul className="footer__nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#video-analysis" className="footer__nav-link">
                    AI Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: LIÊN HỆ */}
            <div className="footer__col footer__col--contact">
              <h4 className="footer__title">LIÊN HỆ</h4>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <span><strong>Điện thoại:</strong> {contact.phone}</span>
                </li>
                <li className="footer__contact-item">
                  <span><strong>Email:</strong> {contact.email}</span>
                </li>
                <li className="footer__contact-item">
                  <span><strong>Địa chỉ:</strong> {contact.address}</span>
                </li>
              </ul>
            </div>

            {/* Column 3: THEO DÕI CHÚNG TÔI */}
            <div className="footer__col footer__col--social">
              <h4 className="footer__title">THEO DÕI CHÚNG TÔI</h4>
              <div className="footer__social-links">
                <a
                  href="https://vietfuture.world/lich-trinh-trien-khai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  VietFuture 2026 — Lịch trình
                </a>
                <a
                  href="https://www.facebook.com/LHUMEDIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  Facebook LHU MEDIA
                </a>
                <a
                  href="https://lhu.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  Website Đại học Lạc Hồng
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom-bar">
            <p className="footer__copyright">
              © {currentYear} {project.organization} & {project.partner}. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
