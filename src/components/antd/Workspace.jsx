import { DraggablePanel } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';
import {
    BasicNode,
    FlowEditor,
    FlowEditorProvider,
    FlowPanel,
    Inspector,
    useFlowEditor,
  } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import StringNode from './StringNode';
import NodeMenu from './NodeMenu';
import { createStyles } from 'antd-style';
import EditorNode from './EditorNode';
import CustomNode from './CustomNode';

  const useStyles = createStyles(() => {
    return {
      container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      aside: {
        marginBottom: '10px',
      },
      description: {
        marginBottom: '10px',
      },
      dndnode: {
        height: '20px',
        padding: '4px',
        border: '1px solid #1a192b',
        borderRadius: '2px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'grab',
      },
      'dndnode.input': {
        borderColor: '#0041d0',
      },
      'dndnode.output': {
        borderColor: '#ff0072',
      },
      'reactflow-wrapper': {
        flexGrow: '1',
        height: '100%',
      },
      selectall: {
        marginTop: '10px',
      },
    };
  });

  


  let id = 0;
  const getId = () => `node_${id++}`;
  
  const nodeTypes = {
    StringNode: StringNode,
    BasicNode: BasicNode,
    EditorNode: EditorNode,
    CustomNode: CustomNode,
  };
  const ProFlowDemo = () => {
    const editor = useFlowEditor();
    const { styles } = useStyles();
    const [open, setOpen] = useState(false);
    const [nodes, setNodes] = useState([
        { id: 'a1',
            type: 'EditorNode',
            position: { x: 200, y: 100 },
            data: {
              title: '123',
              aaa: '456',
            }
        }
    ]);
  
    const onDragOver = useCallback((event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }, []);
  
    const onDrop = useCallback(
      (event) => {
        event.preventDefault();
        if (!editor) return;
  
        const type = event.dataTransfer.getData('application/reactflow');
        if (typeof type === 'undefined' || !type) {
          return;
        }
  
        const position = editor.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
        const newNode = {
          id: getId(),
          type,
          position,
          content: {
            a: '123',
          },
          data: {
            title: `${type} node`,
            content: '123',
          },
        };
  
        editor.addNode(newNode);

        setNodes(nodes => [...nodes, newNode]);
      },
      [editor],
    );


    
    useEffect(() => {
      editor.addNodes(nodes);
    }, [editor]);


    return (
      <div className={styles.container}>
  <Flexbox style={{ height: '98vh' }}>
    <div style={{ flex: 1, padding: 12 }}>

    <FlowEditor
          nodeTypes={nodeTypes}
          flowProps={{
            onDrop,
            onDragOver,
            onPaneClick: () => setOpen(false),
//            onNodeClick: (e, node) => alert("node clicked", node),
            onEdgeClick: (e, edge) => alert(JSON.stringify(editor)),

          }}
          miniMap={false}
          devtools={false}
        >
          <FlowPanel position={'top-right'}>
            <Button onClick={() => setOpen(true)}>Open Nodes</Button>
          </FlowPanel>
          <Inspector open={open} onClick={() => setOpen(false)}>
            <NodeMenu />
          </Inspector>
        </FlowEditor>

    </div>
    <DraggablePanel placement="bottom" maxHeight={250} style={{ width: '100%', padding: 12 }}>
      Bottom Panel
    </DraggablePanel>
  </Flexbox>        
      </div>
      
    );
  };
  
  const Workspace = () => {
    return (
      <FlowEditorProvider>
        <ProFlowDemo />
      </FlowEditorProvider>
    );
  };
  
  export default Workspace;