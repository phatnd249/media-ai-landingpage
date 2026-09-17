import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const classNames = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
