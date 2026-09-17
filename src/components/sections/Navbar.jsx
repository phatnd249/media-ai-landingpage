import { useState, useEffect } from 'react';
import Container from '../layout/Container';
import { navLinks } from '../../data/navigation';
import logoVietFuture from '../../assets/images/logo-vietfuture.png';
import logoLhu from '../../assets/images/logo-lhu.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Container className="navbar__container">
        <div className="navbar__logos">
          <a
            href="https://vietfuture.world/lich-trinh-trien-khai/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__logo-link"
            title="VietFuture 2026 - Lịch trình triển khai"
          >
            <img src={logoVietFuture} alt="VietFuture 2026" className="navbar__logo navbar__logo--vietfuture" />
          </a>
          <a
            href="https://lhu.edu.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__logo-link"
            title="Đại học Lạc Hồng"
          >
            <img src={logoLhu} alt="Đại học Lạc Hồng" className="navbar__logo navbar__logo--lhu" />
          </a>
        </div>

        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>
    </nav>
  );
}
