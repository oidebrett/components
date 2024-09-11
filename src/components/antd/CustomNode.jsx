import React from 'react'
import { createStyles } from 'antd-style';
import { Handle, Position } from '@ant-design/pro-flow';

const useStyles = createStyles(() => {
    return {
      customerWrap: {
        width: '260px',
        minHeight: '100px',
        backgroundColor: '#f6f8fa',
        padding: '16px',
        boxSizing: 'border-box',
        borderRadius: '8px',
      },
      handle: {
        top: '0',
      },
      stepTitle: {
        overflow: 'hidden',
        color: '#8c8c8c',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      pipeNode: {
        marginTop: '10px',
        width: '232px',
        boxSizing: 'border-box',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '8px',
      },
      mainBox: {
        width: '100%',
        padding: '12px',
        height: '70px',
        backgroundColor: 'white',
        display: 'flex',
        borderBottom: 'none',
        borderRadius: '8px',
        boxSizing: 'border-box',
      },
      logo: {
        img: { width: '16px', height: '16px', marginTop: '4px' },
      },
      wrap: {
        marginLeft: '8px',
        display: 'flex',
        flexDirection: 'column',
      },
      title: {
        color: '#000',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '22px',
        whiteSpace: 'nowrap',
      },
      des: {
        marginTop: '8px',
        color: '#00000073',
        fontSize: '12px',
      },
      children: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '10px',
      },
      childrenBox: {
        width: '200px',
        padding: '12px',
        height: '70px',
        backgroundColor: 'white',
        display: 'flex',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '8px',
        boxSizing: 'border-box',
        marginTop: '10px',
      },
      container: {
        width: '100%',
        height: '600px',
      },
    };
  });

const CustomNode = (data) => {
    const { stepTitle, title, des, logo, needSwitch = false, children = [] } = data;
    const { styles } = useStyles();

    
    return (
      <div className={styles.customerWrap}>
        <Handle
          type="target"
          position={Position.Left}
          style={{
            opacity: 0,
            top: 30,
            left: 3,
          }}
        />
        <div className={styles.stepTitle}>{stepTitle}</div>
        <div className={styles.pipeNode}>
          <div className={styles.mainBox}>
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.wrap}>
              <div className={styles.title}>{title}</div>
              <div className={styles.des}>{des}</div>
            </div>
            {needSwitch && (
              <div className={styles.pipeNodeRight}>
                <div className={styles.switch}>
                  <div className={styles.switchIcon}></div>
                </div>
              </div>
            )}
          </div>
          {children.length > 0 && (
            <div className={styles.children}>
              {children.map((item, index) => (
                <div className={styles.childrenBox} key={index}>
                  <div className={styles.logo}>
                    <img src={item.logo} alt="" />
                  </div>
                  <div className={styles.wrap}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.des}>{item.des}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Handle
          type="source"
          position={Position.Right}
          style={{
            top: 30,
            right: 3,
            opacity: 0,
          }}
        />
      </div>
    );
}

export default CustomNode