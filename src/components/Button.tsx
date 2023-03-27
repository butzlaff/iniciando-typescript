import { MouseEventHandler } from "react";

interface ButtonProps {
  sendForm: MouseEventHandler<HTMLButtonElement>;
}


const Button = ({ sendForm } : ButtonProps ) => {

  return (
    <button onClick={ sendForm } data-testid="submit-button">login</button>
  )
}

export default Button;