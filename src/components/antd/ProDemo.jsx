import React from 'react'
import { FlowEditor, FlowEditorProvider, FlowPanel } from '@ant-design/pro-flow';
import  StringRender  from './StringRender';
import BtnGroup from './btnGroup';
import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
    return {
      container: {
        width: '100%',
        height: '600px',
        button: {
          width: '100px',
          height: '30px',
          lineHeight: '24px',
          boxSizing: 'border-box',
          textAlign: 'center',
          userSelect: 'none',
          marginRight: '10px',
          marginTop: '10px',
        },
      },
    };
  });

const ProFlowDemo = () => {
    const { styles } = useStyles();
  
    return (
      <div className={styles.container}>
        <FlowEditor nodeTypes={{ StringNode: StringRender }} miniMap={false} devtools={true}>
          <FlowPanel position="top-center">
            <BtnGroup />
          </FlowPanel>
        </FlowEditor>
      </div>
    );
  };

const ProDemo = () => {
    return (
        <FlowEditorProvider>
          <ProFlowDemo />
        </FlowEditorProvider>
      );
}

export default ProDemo


