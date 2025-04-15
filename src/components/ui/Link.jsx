function Link({ href, children, className = "" }) {
  return (
    <a href={href} className={`${className} block `}>
      {children}
    </a>
  );
}

export default Link;
