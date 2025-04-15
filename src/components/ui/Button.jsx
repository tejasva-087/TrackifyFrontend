function Button({
  className = "",
  type = "button",
  disabled = false,
  onClick,
  children,
}) {
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
