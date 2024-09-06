import JsonTree from "../components/JsonTree";

const data = {"message_id": "4", "command": "write_attribute", "args": {"endpoint_id": 0, "node_id": 1, "attribute_path": "0/31/0", "value": [{"privilege": 5,"authMode": 2,"subjects": [112233, 3],"targets": [],"fabricIndex": 1}]}}

export default {
  title: "JsonTree",
  component: JsonTree,
}

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    data: data,  
  },
};