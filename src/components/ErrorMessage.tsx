type String = {
  text: string;
}

const ErrorMessage = ({ text } : String)  => {
  return (
    <p data-testid='error-message'>{ text }</p>
  )
}

export default ErrorMessage;
