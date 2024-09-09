
import DataView from "../../components/antd/DataView";
import { data } from "./DataView.mock"

export default {
  title: "Antd/Dataview",
  component: DataView,
}


export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    data: data,
  },
};