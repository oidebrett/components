import { EditOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ControlInput } from './ControlInput';

/*
const EditableText = () => {
    return (
        <p>here</p>
    )
}
*/
const EditableText = memo(({ value, onChange }) => {
  const [edited, setEdited] = useState(false);
  return edited ? (
    <ControlInput
      onChange={onChange}
      onChangeEnd={() => {
        setEdited(false);
      }}
      value={value}
    />
  ) : (
    <Flexbox gap={8} align="center" horizontal>
      <span
        style={{
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <ActionIcon
        icon={<EditOutlined />}
        onClick={() => {
          setEdited(!edited);
        }}
        placement="right"
        title={'Edit'}
      />
    </Flexbox>
  );
});

export default EditableText;