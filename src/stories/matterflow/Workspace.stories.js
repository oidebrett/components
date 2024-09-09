import Workspace from "../../components/matterflow/Workspace";
import { params } from "./Workspace.mock";

export default {
  title: "Matterflow/Workspace",
  component: Workspace,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    params: params
  },
};
