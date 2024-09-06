import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';

const parseHTMLToJSON = (htmlContent) => {
  console.log("htmlContent: %o", htmlContent);
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const documentElements = doc.querySelectorAll('#documents > div._amphi_document');
  console.log("documentElements: %o", documentElements);
  const documents = [];

  documentElements.forEach((element) => {
      console.log("element: %o", element);
      const nbElement = element.querySelector('div._amphi_nb');
      const pageContentElement = element.querySelector('div._amphi_page_content');
      const metadataElement = element.querySelector('div._amphi_metadata');

      if (nbElement && pageContentElement && metadataElement) {
          const nb = nbElement.textContent?.trim() || '';
          const pageContent = pageContentElement.innerHTML?.replace('<strong>Document Content:</strong>', '').trim() || '';
          console.log("pageContent: %o", pageContent);
          let metadataText = metadataElement.textContent?.replace('Metadata:', '').trim() || '';
          console.log("metadataText: %o", metadataText);

          let metadata;

          try {
              metadataText = metadataText.replace(/'/g, '"'); // Replace single quotes with double quotes
              metadata = JSON.parse(metadataText);
          } catch (e) {
              console.error("Error parsing metadata:", e);
              metadata = metadataText; // Fall back to raw text if parsing fails
          }

          documents.push({ nb, page_content: pageContent, metadata: metadata });
      }
  });

  console.log("documents: %o", documents);
  return documents;
};



const createTreeData = (documents) => {
  return documents.map((doc, index) => ({
      title: doc.nb,
      key: `doc-${index}`,
      children: [
          {
            title: (
              <pre style={{ userSelect: 'text', cursor: 'text'}}>{doc.page_content}</pre>
            ),
              key: `doc-${index}-page-content`
          },
          {
              title: 'Metadata',
              key: `doc-${index}-metadata`,
              children: Object.entries(doc.metadata).map(([key, value]) => ({
                  title: `${key}: ${value}`,
                  key: `doc-${index}-metadata-${key}`
              }))
          }
      ]
  }));
};

const DocumentView = ({ htmlData }) => {
  const documents = parseHTMLToJSON(htmlData);
  const treeData = createTreeData(documents);
  console.log("Tree data %o", treeData);

  return (
    <Tree
      defaultExpandedKeys={treeData.map(node => node.key)}
      defaultSelectedKeys={treeData.map(node => node.key)}
      defaultCheckedKeys={treeData.map(node => node.key)}
      treeData={treeData}
    />
  );
};

export default DocumentView;