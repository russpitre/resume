import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import MobileDownload from './resume/MobileDownload.jsx';
import ResumeDocument from './resume/ResumeDocument.jsx';

function App() {
  const Document = <ResumeDocument />;

  if (isBrowser) {
    return (
      <PDFViewer width="100%" height="100%">
        {Document}
      </PDFViewer>
    );
  }

  if (isMobile) {
    return <MobileDownload document={Document} />;
  }

  return null;
}

export default App;
