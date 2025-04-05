const Button = (props) => {
  const { variant = 'button', type = 'button', onClick, children } = props

  return (
    <button
      className={variant}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
