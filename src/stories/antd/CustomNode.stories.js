import CustomNode from "../../components/antd/CustomNode";
import { nodes } from "./CustomNode.mock"


export default {
  title: "Antd/CustomNode",
  component: CustomNode,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    nodes: nodes,  
  },
};