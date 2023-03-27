import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components/Form';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Form', () => {
  test('should display error message when form is submitted with empty fields', async () => {
    const { getByTestId, getByText } = render(<Form />);
    const submitButton = getByTestId('submit-button'); // use o atributo "data-testid" adicionado ao botão
    await userEvent.click(submitButton);
    const emailError = getByText(/email is required/i);
    const passwordError = getByText(/password is required/i);
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
  it('should display error message when email is invalid', async () => {
    render(<Form />);
    const emailInput = screen.getByTestId("email");
    const submitButton = screen.getByTestId('submit-button'); // use o atributo "data-testid" adicionado ao botão
    await userEvent.type(emailInput, 'validemail'); // use um endereço de e-mail válido
    await userEvent.click(submitButton);
    const emailError = screen.getByText(/invalid email address/i);
    expect(emailError).toBeInTheDocument();
  });
  it('should display success message when form is submitted with valid fields', async () => {
    render(<Form />);
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByTestId('submit-button');
    await userEvent.type(emailInput, "valid-email@gmail.com")
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(submitButton);
    const successMessage = screen.getByText(/login successful/i); // use a função "findByText" para aguardar a mewnsagem de sucesso
    expect(successMessage).toBeInTheDocument();
  });
});


