import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useLocation } from 'react-router-dom';

function FileView() {

    const location = useLocation();

    const docUrl = location.state.docUrl;
    const docType =  docUrl.slice(docUrl.lastIndexOf('.')+1);
    
    
    const docs = [
        {
          uri:docUrl, fileType:docType
        }
      ];
    
      return (
        <div>
          <DocViewer 

    style={{paddingTop:120,width: 800, height: 800, margin:'auto'}} 
    pluginRenderers={DocViewerRenderers} 
    documents={docs} 
    config={{
        header: {
        disableHeader: true
        }

  }}/>
        </div>
      );
};

export default FileView;



