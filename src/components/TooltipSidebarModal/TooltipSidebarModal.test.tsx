import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TooltipSidebarModal from '.';
import userEvent from '@testing-library/user-event';

const textBody = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae reprehenderit labore.";

describe('<TooltipSidebarModal />', () => {
  test('renders TooltipSidebarModal as hyperlink', () => {
    render(<TooltipSidebarModal informationText={textBody} hyperLinkText="Click here for more information" isHyperLink={true} informationTitle="Test Title"/>);
      const hyperLinkElement = screen.getByText('Click here for more information');
      expect(hyperLinkElement).toBeInTheDocument();
  });
  test('renders TooltipSidebarModal usind information icon', () => {
    render(<TooltipSidebarModal informationText={textBody} hyperLinkText="Click here" informationTitle="Test Title"/>);
      const infomationIconElement = screen.getAllByTestId('infoIcon');
      expect(infomationIconElement).toBeInTheDocument();
  });

  test('renders TooltipSidebarModal using  unfilled information icon', () => {
    render(<TooltipSidebarModal informationText={textBody} hyperLinkText="Click here" informationTitle="Test Title" isUnFilledIcon={true}/>);
      const infomationIconElement = screen.getAllByTestId('infoIconUnFilled');
      expect(infomationIconElement).toBeInTheDocument();
  });
  test('opens modal to display information', () => {
    render(<TooltipSidebarModal informationText={textBody} hyperLinkText="Click here for more information" isHyperLink={true} informationTitle="Test Title"/>);
      const hyperLinkElement = screen.getByText('Click here for more information');
      expect(hyperLinkElement).toBeInTheDocument();
      userEvent.click(hyperLinkElement)
      expect(screen.getByText(textBody)).toBeInTheDocument();
  });
})