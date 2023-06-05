import React from 'react';
import { render, screen } from '@testing-library/react';
import TooltipSidebarModal from '.';

test('renders TooltipSidebarModal', () => {
  render(<TooltipSidebarModal />);
  const linkElement = screen.getByText('TooltipSidebarModal');
  expect(linkElement).toBeInTheDocument();
});