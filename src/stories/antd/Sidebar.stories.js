import Sidebar from "../../components/antd/Sidebar";
import { mockComponentService } from "./Sidebar.mock";


export default {
  title: "Antd/Sidebar",
  component: Sidebar,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    componentService: mockComponentService,
  },
};
