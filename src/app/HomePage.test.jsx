import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for extended expectations
import Home from './page';

describe('Home page', () => {
  it('Home page render', () => {
    render(<Home />);
    const welcomeElement = screen.getByText(`Let's go to the Star Wars Universe`);
    expect(welcomeElement).toBeInTheDocument();
  });


  it('renders link to heroes page', () => {
    render(<Home />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/heroes');
  });
});
