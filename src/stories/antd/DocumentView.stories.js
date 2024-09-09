
import DocumentView from "../../components/antd/DocumentView";
import { data } from "./DocumentView.mock"

export default {
  title: "Antd/DocumentView",
  component: DocumentView,
}


export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    data: data 
  },
};