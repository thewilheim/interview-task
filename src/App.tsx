import React from 'react';
import TooltipSidebarModal from './components/TooltipSidebarModal';

function App() {
  return (
    <div className="App">
      <TooltipSidebarModal informationText={"textBody"} hyperLinkText="Click here for more information" informationTitle="Test Title" />
    </div>
  );
}

export default App;
