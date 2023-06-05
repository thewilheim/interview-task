import { useState } from "react";
import "./styles/TooltipSidebarModal.css"

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

  const toggleSideModal = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLElement;
    if(!target.classList.contains('sidebarContainer')){
      setIsModalOpen(previousState => !previousState)
    }
  };
  return (
    <>
      {isHyperLink ? (
        <button className="hyperLink" aria-label={hyperLinkText} onClick={(event) => toggleSideModal(event)}>{hyperLinkText}</button>
      ) : (
         <span
          onClick={(event) => toggleSideModal(event)}
          className="material-icons nsw-material-icons nsw-material-icons--info infoButton"
          aria-hidden="true"
          data-testid="infoIcon"
        >
          info
        </span>
        
      )}
      {isModalOpen ? (
        <div className="sidebar" onClick={(event) => toggleSideModal(event)}>
          <div className="sidebarContainer">
            <div className="sidebarHeader">
              <h1>{title}</h1>
              <span className="material-icons nsw-material-icons nsw-material-icons--error infoButton" aria-hidden="true">cancel</span>
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