import NodeMenu from "../../components/matterflow/NodeMenu";
import { nodes } from "./NodeMenu.mock";

export default {
  title: "Matterflow/NodeMenu",
  component: NodeMenu,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    nodes: nodes,
  },
};
