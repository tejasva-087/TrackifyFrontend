function link({ children, link, type, className }) {
  return (
    <a href={link} className={`link link--${type} ${className}`}>
      {children}
    </a>
  );
}

export default link;
