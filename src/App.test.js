import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Resume/i); // Modify the text to match the link text
  expect(linkElement).toBeInTheDocument();
});