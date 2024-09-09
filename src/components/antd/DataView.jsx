import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const DataView = ({ htmlData }) => {
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const { data, headers } = htmlToJson(htmlData);
    setDataSource(data);
    setColumns(headers.map((header, index) => ({
      title: index === 0 ? '' : header,
      dataIndex: header,
      key: header,
      ...(index === 0 && { rowScope: 'row' }),
      ellipsis: true,
      render: (text) => (
        <div style={{
          fontSize: '12px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '200px', 
          minWidth: '25px'
        }}>
          {text}
        </div>
      ),
    })));
  }, [htmlData]);

  return (
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={false} 
      size="small"
      scroll={{ x: 'max-content' }} // This enables horizontal scrolling
      style={{ fontSize: '12px', tableLayout: 'fixed', minWidth: '100%' }}
      />
  );
};

function htmlToJson(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Extract headers from th inside thead, excluding the first one (index)
  let headers = Array.from(doc.querySelectorAll('table thead th')).slice(1).map(th => th.textContent?.trim() ?? "");

  const rows = doc.querySelectorAll('table tbody tr');
  const data = Array.from(rows, row => {
    const cells = row.querySelectorAll('th, td');
    const rowObj = {};

    // Capture the index from the first cell
    rowObj['index'] = cells[0].textContent?.trim() ?? "";

    // Map the rest of the cells to headers
    headers.forEach((header, idx) => {
      rowObj[header] = cells[idx + 1]?.textContent?.trim() ?? "";
    });

    return rowObj;
  });

  return { data, headers: ['index', ...headers] };  // Set the first header to empty string
}

  

export default DataView;
