import { useState } from "react";
import "./TooltipSidebarModal.css"

interface TooltipSidebarModalInterface {
  informationText: string;
  hyperLinkText: string;
  isHyperLink?: boolean;
  title: string;
  subTitle: string;
}

function TooltipSidebarModal(props: TooltipSidebarModalInterface) {
  const {
    informationText,
    hyperLinkText,
    isHyperLink,
    title,
    subTitle,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleSideModal = (event: any): void => {
    if(!event.target.classList.contains('sidebarContainer')){
      setIsModalOpen(previousState => !previousState)
    }
  };
  return (
    <>
      {isHyperLink ? (
        <button className="hyperLink" onClick={(event) => toggleSideModal(event)}>{hyperLinkText}</button>
      ) : (
        <button className="infoButton" onClick={(event) => toggleSideModal(event)}>
         <span
          className="material-icons nsw-material-icons nsw-material-icons--info"
          aria-hidden="true"
          data-testid="infoIcon"
        >
          info
        </span>
        </button>
        
      )}
      {isModalOpen ? (
        <div className="sidebar" onClick={(event) => toggleSideModal(event)}>
          <div className="sidebarContainer">
            <div className="sidebarHeader">
              <h1>{title}</h1>
              <span className="material-icons nsw-material-icons nsw-material-icons--error" aria-hidden="true">cancel</span>
            </div>
            <h2>{subTitle}</h2>
            <p>{informationText}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TooltipSidebarModal;