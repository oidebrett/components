import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    aside: {
      borderRight: '1px solid #eee',
      padding: '15px 10px',
      fontSize: '12px',
      background: '#fcfcfc',
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

export default () => {
  const { styles, cx } = useStyles();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={styles.aside}>
      <div className={styles.description}>You can drag these nodes to the canvas above</div>
      <div
        className={cx(styles.dndnode, styles.input)}
        onDragStart={(event) => onDragStart(event, 'StringNode')}
        draggable
      >
        String Node
      </div>
      <div
        className={cx(styles.dndnode, styles.input)}
        onDragStart={(event) => onDragStart(event, 'CustomNode')}
        draggable
      >
        Custom Node
      </div>
      <div
        className={styles.dndnode}
        onDragStart={(event) => onDragStart(event, 'BasicNode')}
        draggable
      >
        BasicNode Node
      </div>
      <div
        className={cx(styles.dndnode, styles.output)}
        onDragStart={(event) => onDragStart(event, 'EditorNode')}
        draggable
      >
        EditNode Node
      </div>
    </div>
  );
};