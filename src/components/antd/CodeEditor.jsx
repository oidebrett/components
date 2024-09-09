import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";

const CodeEditor = ({ code }) => (
    <AceEditor
      width='950px'
      height='500px'
      mode="python"
      theme="xcode"
      name="Code Export"
      fontSize={14}
      lineHeight={19}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
  
  export default CodeEditor;