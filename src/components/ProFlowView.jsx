import React from 'react'
import { FlowView } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
    },
  };
});

const ProFlowView = ({ nodes, edges }) => {
    const { styles } = useStyles();

    return (
      <div className={styles.container}>
        <FlowView nodes={nodes} edges={edges} />
      </div>
    );
  
}

export default ProFlowView