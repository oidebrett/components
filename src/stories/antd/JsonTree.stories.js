import JsonTree from "../../components/antd/JsonTree";
import { data } from "./JsonTree.mock"


export default {
  title: "Antd/JsonTree",
  component: JsonTree,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    data: data,  
  },
};