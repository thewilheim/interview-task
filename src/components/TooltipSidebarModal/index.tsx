import { useState } from "react";

interface TooltipSidebarModalInterface {
  informationText: string;
  hyperLinkText: string;
  isHyperLink?: boolean;
  informationTitle: string;
  isUnfilledIcon?: boolean;
}

function TooltipSidebarModal(props: TooltipSidebarModalInterface) {
  const {
    informationText,
    hyperLinkText,
    isHyperLink,
    informationTitle,
    isUnfilledIcon,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleSideModal = (): void => {
    setIsModalOpen((previousState) => !previousState);
  };
  return (
    <div>
      {hyperLinkText ? (
        <button onClick={() => toggleSideModal()}>{hyperLinkText}</button>
      ) : (
        <span
          onClick={() => toggleSideModal()}
          className="infoIcon"
          aria-hidden="true"
          data-testid="infoIcon"
        >
          info
        </span>
      )}
    </div>
  );
}

export default TooltipSidebarModal;
