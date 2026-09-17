import { useState } from 'react';
import Container from '../layout/Container';
import './RegisterSection.css';

export default function RegisterSection() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="register" id="register">
      <Container className="register__container">
        <div className="register__left">
          <h2 className="register__title">ĐĂNG KÝ ĐỂ TRẢI NGHIỆM</h2>
        </div>

        <div className="register__right">
          <div className="register__card">
            {submitted ? (
              <div className="register__success">
                <div className="register__success-icon">✓</div>
                <h3>Đăng ký thành công!</h3>
                <p>Đội ngũ LHU Media sẽ gửi tài khoản trải nghiệm đến email của bạn trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__field">
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Họ và tên / Đơn vị tổ chức"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="register__field">
                  <input
                    type="email"
                    className="register__input"
                    placeholder="Email liên hệ chính thức"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="register__submit-btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
