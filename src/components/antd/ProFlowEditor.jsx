/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, useFlowEditor } from '@ant-design/pro-flow';
import EditorNode from './EditorNode';
import { createStyles } from 'antd-style';

import { useEffect } from 'react';

const nodeTypes = { EditorNode };

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
    },
  };
});

const ProFlowDemo = () => {
  const editor = useFlowEditor();
  const { styles } = useStyles();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      title: '123',
      type: 'editorNode',
      position: { x: 200, y: 100 },
    });
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={nodeTypes} miniMap={false} devtools={true}></FlowEditor>
    </div>
  );
};

const ProFlowEditor = () => {
  return (
    <FlowEditorProvider>
      <ProFlowDemo />
    </FlowEditorProvider>
  );
};

export default ProFlowEditor;