import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('Counter tests', () => {
  test('counter increments after click', () => {
    render(<Counter />);
    // sreen.debug();

    let message = screen.getByText(/counter value: 0/i);
    expect(message).toBeInTheDocument();

    // const incrementButton = screen.getByRole('button', {  name: /\+/i} );
    const incrementButton = screen.getByRole('button', {  name: "+" } );
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);

    message = screen.getByText(/counter value: 3/i);
    expect(message).toBeInTheDocument();
  });
});