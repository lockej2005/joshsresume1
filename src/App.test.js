import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Add this import
import App from './App';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Resume/i); // Modify the text to match the link text
  expect(linkElement).toBeInTheDocument();
});
