import ProFlowView from "../../components/antd/ProFlowView";  
import { nodes, edges} from "./ProFlowView.mock"


export default {
  title: "Antd/ProFlowView",
  component: ProFlowView,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    nodes: nodes,
    edges: edges,
  },
};