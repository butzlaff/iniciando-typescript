import Button from './Button';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import Successful from './Successful';
import React, { useState, FormEvent } from 'react';
import { ChangeEvent } from 'react';


export const Form: React.FC = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  const sendForm = (e : FormEvent<HTMLButtonElement>) : void => {
    e.preventDefault();
    setIsValid(true);
    validEmail();
  }

  const validEmail = () => {
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && email.length > 0) {
      setEmailValid(true);
    }
  }
    
  const onInputChange = (e : ChangeEvent<HTMLInputElement>) : void => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      return;
    }
    setPass(e.target.value);
  }

  return (
    <>
    <form className="card">
      <label htmlFor="email">email
      <Input value={ email } typeInput="email" placeInput={'Digite seu e-mail...'} onInputChange={ onInputChange }/>
      </label>
      <label htmlFor='password'>password
      <Input value={ pass } typeInput={'password'} placeInput={'Digite seu password...'} onInputChange={ onInputChange }/>
      </label>
      <Button sendForm={ sendForm } />
      { isValid && !email && <ErrorMessage text="email is required" /> }
      { isValid && !pass && <ErrorMessage text="password is required" /> }
      { isValid && !emailValid && <ErrorMessage text="invalid email address" /> }
      { isValid && pass && email && emailValid && <Successful text="login successful" />}
    </form>
    </>
  )
}

// export default Form;