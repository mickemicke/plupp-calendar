import React from 'react';
import { render, screen } from '@testing-library/react';
import DateListItem from './pages/dateList/components/DateListItem';

test('renders learn react link', () => {
  render(<DateListItem date="2021-01-01" />);
  const linkElement = screen.getByText(/2021-01-01/i);
  expect(linkElement).toBeInTheDocument();
});
