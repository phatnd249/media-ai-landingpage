import './Section.css';

export default function Section({ id, className = '', children, background = 'default' }) {
  return (
    <section
      id={id}
      className={`section section--${background} ${className}`}
    >
      {children}
    </section>
  );
}
