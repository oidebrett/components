import * as React from 'react'
import Tree, { TreeProps } from 'antd/lib/tree'
import { isArray, isPlainObject, isFunction } from 'lodash'
import styled from 'styled-components'

const TreeNode = Tree.TreeNode

let id = 0

const TypeNode = styled.span`
  color: #bfbfbf;
`

function isPrimitive(value) {
  return !isArray(value) && !isPlainObject(value) && !isFunction(value)
}

function getTreeNode(key, value) {
  const nodeKey = String(id++);

  if (isPrimitive(value)) {
    return <TreeNode key={nodeKey} title={`${key}: ${value}`} />
  }
  if (isArray(value)) {
    const children = value.map((v, i) => getTreeNode(String(i), v))
    const title = (
      <span>
        {key}
        <TypeNode> [{value.length}]</TypeNode>
      </span>
    )
    return <TreeNode key={nodeKey} title={title}>{children}</TreeNode>
  }
  if (isPlainObject(value)) {
    const keys = Object.keys(value)
    const children = keys.map(key => getTreeNode(key, value[key]))
    const title = (
      <span>
        {key}
        <TypeNode> {`{${keys.length}}`}</TypeNode>
      </span>
    )
    return <TreeNode key={nodeKey} title={title}>{children}</TreeNode>
  }
}

function getTreeNodes(data) {
  if (isArray(data)) {
    return getTreeNode('array', data)
  }
  if (isPlainObject(data)) {
    return getTreeNode('object', data)
  }
}

const JSONTree = ({ data, ...restProps }) => {
  const treeNodes = getTreeNodes(data);

  return (
    <Tree showLine defaultExpandAll {...restProps}>
      {treeNodes}
    </Tree>
  );
};

export default JSONTree;