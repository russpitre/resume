import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ResumeDocument from "./resume/ResumeDocument";

function App() {
  return (
    <PDFViewer width="100%" height="100%">
      <ResumeDocument />
    </PDFViewer>
  );
}

export default App;
