const Button = (props) => {
    const { variant = 'button', onClick, children } = props;
    
    return (
      <button
        className={variant}  // Apply the class based on the variant prop
        type={props.textOnly || 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  