import { render, screen } from '@testing-library/react';
import GrhBookingTool from './grhBookingTool';

test('renders learn react link', () => {
  render(<GrhBookingTool />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
