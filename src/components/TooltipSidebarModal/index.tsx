import { useState } from "react";
import "./TooltipSidebarModal.css"

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

  const toggleSideModal = (event: any): void => {
    if(!event.target.classList.contains('sidebarContainer')){
      setIsModalOpen(previousState => !previousState)
    }
  };
  return (
    <div>
      {isHyperLink ? (
        <button onClick={(event) => toggleSideModal(event)}>{hyperLinkText}</button>
      ) : (
        <span
          onClick={(event) => toggleSideModal(event)}
          className="infoIcon"
          aria-hidden="true"
          data-testid="infoIcon"
        >
          info
        </span>
      )}
      {isModalOpen ? (
        <div className="sidebar" onClick={(event) => toggleSideModal(event)}>
          <div className="sidebarContainer">
            <h1>{informationTitle}</h1>
            <p>{informationText}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TooltipSidebarModal;
