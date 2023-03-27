
interface InputProps {
  typeInput: string;
  placeInput: string;
  onInputChange: CallableFunction;
  value: string;
}


const Input: React.FC<InputProps> = ({ typeInput, placeInput, onInputChange, value }) => {
  return (
    <input
    data-testid={ typeInput }
    id={ typeInput }
    name={ typeInput } 
    type={ typeInput } 
    placeholder={ placeInput } 
    value={ value } 
    onChange={ (e) => onInputChange(e) }
    required />
  )
}

export default Input;