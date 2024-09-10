import { Button } from 'antd';
import { Input } from './Input';

import { memo, useCallback, useEffect, useRef, useState } from 'react';



export const ControlInput = memo(
  ({ value, onChange, onValueChanging, onChangeEnd, ...props }) => {
    const initialValue = value || '';
    const [input, setInput] = useState(initialValue);
    const inputRef = useRef(null);
    const isChineseInput = useRef(false);

    const isFocusing = useRef(false);

    const updateValue = useCallback(() => {
      onChange?.(input);
    }, [input]);

    useEffect(() => {
      if (typeof value !== 'undefined') setInput(value);
    }, [value]);

    return (
      <Input
        ref={inputRef}
        {...props}
        value={input}
        onCompositionStart={() => {
          isChineseInput.current = true;
        }}
        onCompositionEnd={() => {
          isChineseInput.current = false;
        }}
        onFocus={() => {
          isFocusing.current = true;
        }}
        onBlur={() => {
          isFocusing.current = false;
          onChangeEnd?.(input);
        }}
        onChange={(e) => {
          setInput(e.target.value);
          onValueChanging?.(e.target.value);
        }}
        onPressEnter={(e) => {
          if (!e.shiftKey && !isChineseInput.current) {
            e.preventDefault();
            updateValue();
            isFocusing.current = false;
            onChangeEnd?.(input);
          }
        }}
        suffix={
          value === input ? (
            <span />
          ) : (
            <>
              <Button
                type={'link'}
                size={'small'}
                onClick={() => {
                  setInput(value);
                }}
                style={{ padding: 0 }}
              >
                Cancel
              </Button>
              <Button
                type={'link'}
                size={'small'}
                style={{ padding: 0 }}
                onClick={() => {
                  updateValue();
                }}
              >
                Save ↵
              </Button>
            </>
          )
        }
      />
    );
  },
);
