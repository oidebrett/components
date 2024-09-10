import React from 'react'
import { Handle, Position } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';

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

const StringNode = (node) => {
    const { handles, id, selected } = node;
    const { styles, cx } = useStyles();
  
    return (
      <div className={cx(styles.stringNode, selected && styles.selected)}>
        <Handle
          id={typeof handles?.target === 'string' ? handles?.target : id}
          type={'target'}
          position={Position.Left}
        />
        {node.data.title}
        <Handle
          id={typeof handles?.source === 'string' ? handles?.source : id}
          type={'source'}
          position={Position.Right}
        />
      </div>
    );
  
}

export default StringNode