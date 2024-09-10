import { NodeField, TextArea, Handle, Position } from '@ant-design/pro-flow';
import { Button } from 'antd';

import { createStyles } from 'antd-style';

import EditNode  from './EditNode';

const useStyles = createStyles(() => {
    return {
      container: {
        width: '100%',
        height: '600px',
      },
      stringNode: {
        width: '200px',
        height: '50px',
        textAlign: 'center',
        backgroundColor: 'white',
        border: '1px solid aqua',
        borderRadius: '4px',
        lineHeight: '50px',
      },
      selected: {
        border: '1px solid #007bff',
      },
      editNode: {
        width: '400px',
      },
    };
  });

const EditorNode = (node) => {
  const { handles, id, selected } = node;
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.editNode, selected && 'selected')}>
      <Handle
        id={typeof handles?.target === 'string' ? handles?.target : id}
        type={'target'}
        position={Position.Left}
      />

      <EditNode.Preview title={'Output'}>
        <TextArea placeholder={'Enter text here'} type={'block'} />
        <NodeField id={'variable'} title={'Variable 1'}>
          <TextArea placeholder={'Enter text here'} type={'block'} />
        </NodeField>
        <Button onClick={() => alert(true)}>Save</Button>
      </EditNode.Preview>

      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};

export default EditorNode;