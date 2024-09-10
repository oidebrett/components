import { Input as AntInput } from 'antd';
import { forwardRef, memo } from 'react';

import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  input: css`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms ${token.motionEaseOut};

    input {
      background: transparent;
    }
  `,
  block: css`
    background-color: ${token.colorFillTertiary};
    border: 1px solid transparent;

    &:hover {
      background-color: ${token.colorFillQuaternary};
    }
  `,

  textarea: css`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms ${token.motionEaseOut};

    textarea {
      background: transparent;
    }
  `,
}));

export const Input = forwardRef(
  ({ className, type = 'ghost', ...props }, ref) => {
    const { styles, cx } = useStyles();
    return (
      <AntInput
        className={cx(styles.input, type === 'block' && styles.block, className)}
        ref={ref}
        {...props}
      />
    );
  },
);


export const TextArea = memo(
  forwardRef(({ className, type = 'ghost', ...props }, ref) => {
    const { styles, cx } = useStyles();

    return (
      <AntInput.TextArea
        className={cx(styles.textarea, type === 'block' && styles.block, className)}
        ref={ref}
        {...props}
      />
    );
  }),
);
