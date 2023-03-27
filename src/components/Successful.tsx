type String = {
  text: string;
}

const Successful = ({ text } : String)  => {
  return (
    <p data-testid="success">{ text }</p>
  )
}

export default Successful;