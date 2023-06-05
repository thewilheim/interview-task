import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TooltipSidebarModal from ".";
import userEvent from "@testing-library/user-event";

const textBody =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae reprehenderit labore.";

describe("<TooltipSidebarModal />", () => {
  test("renders TooltipSidebarModal as hyperlink", () => {
    render(
      <TooltipSidebarModal
        informationText={textBody}
        hyperLinkText="Click here for more information"
        isHyperLink={true}
        title="Test Title"
        subTitle="subTest Title"
      />
    );
    const hyperLinkElement = screen.getByText(
      "Click here for more information"
    );
    expect(hyperLinkElement).toBeInTheDocument();
  });
  test("renders TooltipSidebarModal as information icon", () => {
    render(
      <TooltipSidebarModal
        informationText={textBody}
        hyperLinkText="Click here"
        title="Test Title"
        subTitle="subTest Title"
      />
    );
    const infomationIconElement = screen.getByTestId("infoIcon");
    expect(infomationIconElement).toBeInTheDocument();
  });
  test("Modal opens and displays correctly", async () => {
    render(
      <TooltipSidebarModal
        informationText={textBody}
        hyperLinkText="Click here for more information"
        isHyperLink={true}
        title="Test Title"
        subTitle="subTest Title"
      />
    );
    const hyperLinkElement = screen.getByText(
      "Click here for more information"
    );
    userEvent.click(hyperLinkElement);

    await waitFor(() => {
      const body = screen.getByText(textBody)
      expect(body).toBeInTheDocument()
    })

    await waitFor(() => {
      const title = screen.getByText("Test Title")
      expect(title).toBeInTheDocument()
    })

    await waitFor(() => {
      const subTitle = screen.getByText("subTest Title")
      expect(subTitle).toBeInTheDocument()
    })
  });
});
