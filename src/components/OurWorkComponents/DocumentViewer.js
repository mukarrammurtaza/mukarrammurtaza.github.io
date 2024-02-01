import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import mypdf from '../../assets/Crootive-SwiftDelivery.pdf'
const DocumentViewer = () => {
  const docs = [
    {
        uri: require("../../assets/Crootive-SwiftDelivery.pdf"),
        fileType: "pdf",
        fileName: "Crootive-SwiftDelivery",
    },
  ];

  return <DocViewer documents={docs} 
  theme={{
    primary: "var(--green)",
    secondary: "var(--black)",
    tertiary: "var(--black)",
    textPrimary: "var(--white)",
    textSecondary: "var(--black)",
    textTertiary: "#00000099",
    disableThemeScrollbar: false,
  }} 
   pluginRenderers={DocViewerRenderers} style={{height : 'fit-content'}}/>;
};

export default DocumentViewer;
