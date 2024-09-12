
/**
 * Sends request to server via fetch API and handles error cases
 * @param {string} endpoint - server endpoint
 * @param {Object} options - options parameter for `fetch` call
 * @returns {Promise<Object>} - server response or error
*/
function fetchWrapper(endpoint, options = {}) {
    return new Promise((resolve, reject) => {
     fetch(endpoint, options)
         .then(async resp => {
             const data = await resp.json();
             //console.log(data);
             if (resp.ok) {
               return resolve(data);
             } else {
               return reject(data);
             }
         })
         .catch(err => {
             return reject(err);
         });
 });
}

/**
* Add connection to server-side workflow
* @param {ConnectionModel} node - connection to add
* @returns {Promise<Object>} - server response
*/
export async function addConnection(connection) {
  const payload = connection;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper("/connection/new", options);
}

/**
* Get available connections 
* @returns {Promise<Object>} - server response (connection items)
*/
export async function getConnections() {
  return fetchWrapper("/connection");
}

/**
* Update configuration of connection in server-side workflow
* @param {int} connection_id - connection_id to update
* @param {Object} config - configuration from options form
* @returns {Promise<Object>} - server response (serialized node)
*/
export async function updateConnection(connection_id, config) {
  const payload = config;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper(`/connection/${connection_id}`, options)
}

/**
 * Retrieve connection info from server side workflow
 * @param {string} connectionId - ID of node to retrieve
 * @returns {Promise<Object>} - server response (connection info)
 */
export async function getConnection(connectionId) {
  return fetchWrapper(`/connection/${connectionId}`);
}


/**
* Delete connection from server-side workflow
* @param {integer} connection_id - connection to remove
* @returns {Promise<Object>} - server response
*/
export async function deleteConnection(connection_id) {
  const options = {
      method: "DELETE"
  };
  return fetchWrapper(`/connection/${connection_id}`, options);
}


/**
* Get available processes 
* @returns {Promise<Object>} - server response (connection items)
*/
export async function getProcesses() {
  return fetchWrapper("/process");
}

/**
* Add process to server-side workflow
* @param {FlowModel} node - flow to make a new process
* @returns {Promise<Object>} - server response
*/
export async function addProcess(flow) {
  const payload = flow;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper("/process/new", options);
}


/**
* Add flow to server-side workflow
* @param {FlowModel} node - flow to add
* @returns {Promise<Object>} - server response
*/
export async function addFlow(flow) {
  const payload = flow;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper("/flow/new", options);
}

/**
* Get available flows 
* @returns {Promise<Object>} - server response (flow items)
*/
export async function getFlows() {
  return [];
//  return fetchWrapper("/flow");
}

/**
* Update configuration of flow in server-side workflow
* @param {int} flow_id - flow_id to update
* @param {Object} config - configuration from options form
* @returns {Promise<Object>} - server response (serialized node)
*/
export async function updateFlow(flow_id, config) {
  const payload = config;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper(`/flow/${flow_id}`, options)
}

/**
 * Retrieve flow info from server side workflow
 * @param {string} flowId - ID of node to retrieve
 * @returns {Promise<Object>} - server response (flow info)
 */
export async function getFlow(flowId) {
  return fetchWrapper(`/flow/${flowId}`);
}


/**
* Delete flow from server-side workflow
* @param {integer} flow_id - flow to remove
* @returns {Promise<Object>} - server response
*/
export async function deleteFlow(flow_id) {
  const options = {
      method: "DELETE"
  };
  return fetchWrapper(`/flow/${flow_id}`, options);
}

/**
* Get available models 
* @returns {Promise<Object>} - server response (connection items)
*/
export async function getModels() {
  return [];
//  return fetchWrapper("/model");
}

/**
* Add model to server-side workflow
* @param {FlowModel} node - flow to make a new model
* @returns {Promise<Object>} - server response
*/
export async function addModel(flow) {
  const payload = flow;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper("/model/new", options);
}

/**
* Update configuration of model in server-side workflow
* @param {int} model_id - model_id to update
* @param {Object} config - configuration from options form
* @returns {Promise<Object>} - server response (serialized node)
*/
export async function updateModel(model_id, config) {
  const payload = config;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper(`/model/${model_id}`, options)
}

/**
 * Retrieve model info from server side workflow
 * @param {string} modelId - ID of node to retrieve
 * @returns {Promise<Object>} - server response (model info)
 */
export async function getModel(modelId) {
  return fetchWrapper(`/model/${modelId}`);
}


/**
* Delete model from server-side workflow
* @param {integer} model_id - model to remove
* @returns {Promise<Object>} - server response
*/
export async function deleteModel(model_id) {
  const options = {
      method: "DELETE"
  };
  return fetchWrapper(`/model/${model_id}`, options);
}

/**
* Get available instances 
* @returns {Promise<Object>} - server response (connection items)
*/
export async function getInstances() {
//  return [];
  return fetchWrapper("/instance");
}

/**
* Add instance to server-side workflow
* @param {FlowModel} node - flow to make a new instance
* @returns {Promise<Object>} - server response
*/
export async function addInstance(flow) {
  const payload = flow;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper("/instance/new", options);
}

/**
* Update configuration of instance in server-side workflow
* @param {int} instance_id - instance_id to update
* @param {Object} config - configuration from options form
* @returns {Promise<Object>} - server response (serialized node)
*/
export async function updateInstance(instance_id, config) {
  const payload = config;
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  return fetchWrapper(`/instance/${instance_id}`, options)
}

/**
 * Retrieve instance info from server side workflow
 * @param {string} instanceId - ID of node to retrieve
 * @returns {Promise<Object>} - server response (instance info)
 */
export async function getInstance(instanceId) {
  return {};
//  return fetchWrapper(`/instance/${instanceId}`);
}


/**
* Delete instance from server-side workflow
* @param {integer} instance_id - instance to remove
* @returns {Promise<Object>} - server response
*/
export async function deleteInstance(instance_id) {
  const options = {
      method: "DELETE"
  };
  return fetchWrapper(`/instance/${instance_id}`, options);
}


/**
 * Offer data as a file download from the browser
 * @param {string} data - data to download
 * @param {string} contentType - MIME type
 * @param {string} fileName - name of downloaded file
 */
export function downloadFile(data, contentType, fileName) {
  const blob = new Blob([data], {type: contentType})
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName || "download";
  anchor.click();
  window.URL.revokeObjectURL(url);
}

/**
 * Retrieve system info from server side 
 * @returns {Promise<Object>} - server response (system info)
 */
export async function getInfo() {
  return fetchWrapper(`/info`);
}


/**
 * Retrieve node info from server side workflow
 * @param {string} nodeId - ID of node to retrieve
 * @returns {Promise<Object>} - server response (node info and flow variables)
 */
export async function getNode(nodeId) {

//  return fetchWrapper(`/node/${nodeId}`);
  return {"retrieved_node": {"name": "WS Connection", "node_id": "4bdab500-fa4a-4b29-af5a-56246ca2750e", "node_type": "connection", "node_key": "WsConnectionNode", "data": null, "is_global": false, "option_values": {"file": ""}, "option_replace": {}}, "flow_variables": []};
}


/**
* Add node to server-side workflow
* @param {CustomNodeModel} node - JS node to add
* @returns {Promise<Object>} - server response
*/
export async function addNode(node) {
  const payload = {...node.options, options: node.config};
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
//  return fetchWrapper("/node/", options);
  return {"message": "Added new node to graph with id: 4bdab500-fa4a-4b29-af5a-56246ca2750e"}
}


/**
* Delete node from server-side workflow
* @param {CustomNodeModel} node - JS node to remove
* @returns {Promise<Object>} - server response
*/
export async function deleteNode(node) {
  const id = node.options.id;
  const options = {
      method: "DELETE"
  };
  const endpoint = node.options.is_global ? "node/global" : "node";
  //return fetchWrapper(`/${endpoint}/${id}`, options);

  return {"message": "Removed node ID #4bdab500-fa4a-4b29-af5a-56246ca2750e"};
}


/**
* Update configuration of node in server-side workflow
* @param {CustomNodeModel} node - JS node to remove
* @param {Object} config - configuration from options form
* @param {Object} flowConfig - flow variable configuration options
* @returns {Promise<Object>} - server response (serialized node)
*/
export async function updateNode(node, config, flowConfig) {
  node.config = config;
  node.options.option_replace = flowConfig;
  const payload = {...node.options, options: node.config};
  const options = {
      method: "POST",
      body: JSON.stringify(payload)
  };
  const endpoint = node.options.is_global ? "node/global" : "node";

  //return fetchWrapper(`/${endpoint}/${node.options.id}`, options)

  return {"message": "Invalid value 'None' (type 'NoneType') for StringParameter"};
}


/**
* Save front-end workflow and download server response as JSON file
* @param {Object} diagramData - serialized react-diagrams model
*/
export async function save(diagramData) {
  const payload = JSON.stringify(diagramData);
  const options = {
      method: "POST",
      body: payload
  };
  fetchWrapper("/workflow/save", options)
      .then(json => {
          downloadFile(JSON.stringify(json), "application/json",
              json.filename || "diagram.json")
      }).catch(err => console.log(err));
}

/**
* Save front-end workflow to server as JSON file
* @param {Object} diagramData - serialized react-diagrams model
*/
export async function saveToServer(diagramData) {
  const payload = JSON.stringify(diagramData);
  const options = {
      method: "POST",
      body: payload
  };
  fetchWrapper("/workflow/savetoserver", options)
      .then(json => {
          console.log(json);
      }).catch(err => console.log(err));
}

/**
* Get available nodes for node menu
* @returns {Promise<Object>} - server response (node menu items)
*/
export async function getNodes() {
//  return fetchWrapper("/workflow/nodes");
return {"Manipulation": [{"name": "Pivoting", "node_key": "PivotNode", "node_type": "manipulation", "num_in": 1, "num_out": 3, "color": "goldenrod", "filename": "pivot", "doc": null, "options": {"index": null, "values": null, "columns": null, "aggfunc": "mean", "fill_value": null, "margins": false, "dropna": true, "margins_name": "All", "observed": false}, "option_types": {"index": {"type": "string", "label": "Index", "value": null, "docstring": "Column to aggregate (column, grouper, array or list)"}, "values": {"type": "string", "label": "Values", "value": null, "docstring": "Column name to use to populate new frame's values (column, grouper, array or list)"}, "columns": {"type": "string", "label": "Column Name Row", "value": null, "docstring": "Column(s) to use for populating new frame values. (column, grouper, array or list)"}, "aggfunc": {"type": "string", "label": "Aggregation function", "value": "mean", "docstring": "Function used for aggregation (function, list of functions, dict, default numpy.mean)"}, "fill_value": {"type": "string", "label": "Fill value", "value": null, "docstring": "Value to replace missing values with (scalar)"}, "margins": {"type": "boolean", "label": "Margins name", "value": false, "docstring": "Add all rows/columns"}, "dropna": {"type": "boolean", "label": "Drop NaN columns", "value": true, "docstring": "Ignore columns with all NaN entries"}, "margins_name": {"type": "string", "label": "Margins name", "value": "All", "docstring": "Name of the row/column that will contain the totals when margins is True"}, "observed": {"type": "boolean", "label": "Column Name Row", "value": false, "docstring": "Row number with column names (0-indexed) or \"infer\""}}, "download_result": false}, {"name": "Mapping", "node_key": "MappingNode", "node_type": "manipulation", "num_in": 1, "num_out": 1, "color": "goldenrod", "filename": "mapping", "doc": null, "options": {"modelmapping": null}, "option_types": {"modelmapping": {"type": "instanceselect", "label": "ModelMapping", "value": null, "docstring": null, "options": []}}, "download_result": false}, {"name": "Joiner", "node_key": "JoinNode", "node_type": "manipulation", "num_in": 2, "num_out": 1, "color": "goldenrod", "filename": "join", "doc": null, "options": {"on": null}, "option_types": {"on": {"type": "string", "label": "Join Column", "value": null, "docstring": "Name of column to join on"}}, "download_result": false}, {"name": "Combiner", "node_key": "CombineNode", "node_type": "manipulation", "num_in": 2, "num_out": 1, "color": "goldenrod", "filename": "combine", "doc": null, "options": {}, "option_types": {}, "download_result": false}, {"name": "Unflatten", "node_key": "UnflattenNode", "node_type": "manipulation", "num_in": 1, "num_out": 1, "color": "goldenrod", "filename": "unflatten", "doc": null, "options": {}, "option_types": {}, "download_result": false}, {"name": "Filter", "node_key": "FilterNode", "node_type": "manipulation", "num_in": 1, "num_out": 1, "color": "goldenrod", "filename": "filter", "doc": null, "options": {"filter": "*", "include": true, "data": false}, "option_types": {"filter": {"type": "string", "label": "Filter", "value": "*", "docstring": "Jmespath query to filter"}, "include": {"type": "boolean", "label": "Include", "value": true, "docstring": "Include entries found by filter"}, "data": {"type": "boolean", "label": "Output Filtered Data", "value": false, "docstring": "Output filtered data instead of original data entry"}}, "download_result": false}], "Visualization": [{"name": "Graph Node", "node_key": "GraphNode", "node_type": "visualization", "num_in": 1, "num_out": 0, "color": "red", "filename": "graph", "doc": "Displays a pandas DataFrame in a visual graph.\n\n    Raises:\n        NodeException: any error generating Altair Chart.\n    ", "options": {"graph_type": "bar", "mark_options": false, "width": 10, "height": 10, "encode_options": true, "x_axis": "a", "y_axis": "average(b)"}, "option_types": {"graph_type": {"type": "select", "label": "Graph Type", "value": "bar", "docstring": "Graph viz type", "options": ["area", "bar", "line", "point"]}, "mark_options": {"type": "boolean", "label": "Specify mark options", "value": false, "docstring": "Specify mark options"}, "width": {"type": "int", "label": "Mark width", "value": 10, "docstring": "Width of marks"}, "height": {"type": "int", "label": "Mark height", "value": 10, "docstring": "Height of marks"}, "encode_options": {"type": "boolean", "label": "Specify encoding options", "value": true, "docstring": "Specify encoding options"}, "x_axis": {"type": "string", "label": "X-Axis", "value": "a", "docstring": "X-axis values"}, "y_axis": {"type": "string", "label": "Y-Axis", "value": "average(b)", "docstring": "Y-axis values"}}, "download_result": false}], "Connection": [{"name": "WS Connection", "node_key": "WsConnectionNode", "node_type": "connection", "num_in": 0, "num_out": 1, "color": "blue", "filename": "ws_connection", "doc": "WsConnectionNode\n\n    Reads a Websocket into a workflow.\n\n    Raises:\n         NodeException: any error reading web socket, converting\n            to workflow.\n    ", "options": {"file": ""}, "option_types": {"file": {"type": "file", "label": "Test Json", "value": "", "docstring": "Json File"}}, "download_result": false}], "  Pycache  ": [], "I/O": [{"name": "Table Creator", "node_key": "TableCreatorNode", "node_type": "io", "num_in": 0, "num_out": 1, "color": "green", "filename": "table_creator", "doc": "Accepts raw-text CSV input to create data tables.\n\n    Raises:\n         NodeException: any error reading CSV file, converting\n            to DataFrame.\n    ", "options": {"input": "", "sep": ",", "header": "infer"}, "option_types": {"input": {"type": "text", "label": "Input", "value": "", "docstring": "Text input"}, "sep": {"type": "string", "label": "Delimiter", "value": ",", "docstring": "Column delimiter"}, "header": {"type": "string", "label": "Header Row", "value": "infer", "docstring": "Row number containing column names (0-indexed)"}}, "download_result": false}, {"name": "Write Json", "node_key": "WriteJsonNode", "node_type": "io", "num_in": 1, "num_out": 0, "color": "green", "filename": "write_json", "doc": "WriteJsonNode\n\n    Writes the current json to a Json file.\n\n    Raises:\n        NodeException: any error writing Json file, converting\n            from json data.\n    ", "options": {"file": null, "write_mode": "append", "exclude": ""}, "option_types": {"file": {"type": "string", "label": "Filename", "value": null, "docstring": "CSV file to write"}, "write_mode": {"type": "select", "label": "Write Mode", "value": "append", "docstring": "Overwrite or append to file", "options": ["overwrite", "append"]}, "exclude": {"type": "string", "label": "Exclude", "value": "", "docstring": "Exclude json matching this jmespath query"}}, "download_result": true}, {"name": "Write CSV", "node_key": "WriteCsvNode", "node_type": "io", "num_in": 1, "num_out": 0, "color": "green", "filename": "write_csv", "doc": "WriteCsvNode\n\n    Writes the current DataFrame to a CSV file.\n\n    Raises:\n        NodeException: any error writing CSV file, converting\n            from DataFrame.\n    ", "options": {"file": null, "sep": ",", "index": true}, "option_types": {"file": {"type": "string", "label": "Filename", "value": null, "docstring": "CSV file to write"}, "sep": {"type": "string", "label": "Delimiter", "value": ",", "docstring": "Column delimiter"}, "index": {"type": "boolean", "label": "Write Index", "value": true, "docstring": "Write index as column?"}}, "download_result": true}, {"name": "Read Json", "node_key": "ReadJsonNode", "node_type": "io", "num_in": 0, "num_out": 1, "color": "green", "filename": "read_json", "doc": "ReadJsonNode\n\n    Reads a Json file into a workflow.\n\n    Raises:\n         NodeException: any error reading json file, converting\n            to workflow.\n    ", "options": {"file": null}, "option_types": {"file": {"type": "file", "label": "File", "value": null, "docstring": "Json File"}}, "download_result": false}, {"name": "Read CSV", "node_key": "ReadCsvNode", "node_type": "io", "num_in": 0, "num_out": 1, "color": "green", "filename": "read_csv", "doc": "ReadCsvNode\n\n    Reads a CSV file into a pandas DataFrame.\n\n    Raises:\n         NodeException: any error reading CSV file, converting\n            to DataFrame.\n    ", "options": {"file": null, "sep": ",", "header": "infer"}, "option_types": {"file": {"type": "file", "label": "File", "value": null, "docstring": "CSV File"}, "sep": {"type": "string", "label": "Delimiter", "value": ",", "docstring": "Column delimiter"}, "header": {"type": "string", "label": "Header Row", "value": "infer", "docstring": "Row number containing column names (0-indexed)"}}, "download_result": false}], "Flow Control": [{"name": "String Input", "node_key": "StringNode", "node_type": "flow_control", "num_in": 0, "num_out": 0, "color": "purple", "filename": "string_input", "doc": "StringNode object\n\n    Allows for Strings to replace 'string' fields in Nodes\n    ", "options": {"default_value": null, "var_name": "my_var"}, "option_types": {"default_value": {"type": "string", "label": "Default Value", "value": null, "docstring": "Value this node will pass as a flow variable"}, "var_name": {"type": "string", "label": "Variable Name", "value": "my_var", "docstring": "Name of the variable to use in another Node"}}, "download_result": false}, {"name": "Integer Input", "node_key": "IntegerNode", "node_type": "flow_control", "num_in": 0, "num_out": 0, "color": "purple", "filename": "integer_input", "doc": "StringNode object\n\n    Allows for Strings to replace 'string' fields in Nodes\n    ", "options": {"default_value": null, "var_name": "my_var"}, "option_types": {"default_value": {"type": "int", "label": "Default Value", "value": null, "docstring": "Value this node will pass as a flow variable"}, "var_name": {"type": "string", "label": "Variable Name", "value": "my_var", "docstring": "Name of the variable to use in another Node"}}, "download_result": false}], "Custom Nodes": []};
}


/**
* Get global flow variables for workflow
* @returns {Promise<Object>} - server response (global flow variables)
*/
export async function getGlobalVars() {
  return [];
  //return fetchWrapper("/workflow/globals");
}


/**
* Start a new workflow on the server
* @param {DiagramModel} model - Diagram model
* @returns {Promise<Object>} - server response
*/
export async function initWorkflow(model) {
  const options = {
      method: "POST",
      body: JSON.stringify({
          "id": model.options.id
      })
  };

  //return fetchWrapper("/workflow/new", options);

  return {"directed": true, "multigraph": false, "graph": {}, "nodes": [], "links": []};
}


/**
* Uploads JSON workflow file to server
* @param {FormData} formData - form with key `file` and value of type `File`
* @returns {Promise<Object>} - server response (full serialized workflow)
*/
export async function uploadWorkflow(formData) {
  const options = {
      method: "POST",
      body: formData
  };
  //return fetchWrapper("/workflow/open", options);
  return {"id": "8032b28d-e9b4-43f4-a3aa-f0de3e118eec", "offsetX": 0, "offsetY": 0, "zoom": 100, "gridSize": 0, "layers": [{"id": "cfa12800-261c-44bb-8bb4-813d11b8ed98", "type": "diagram-links", "isSvg": true, "transformed": true, "models": {"f00701e8-f899-4111-bc02-cde9c50907b4": {"id": "f00701e8-f899-4111-bc02-cde9c50907b4", "type": "default", "selected": true, "source": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "sourcePort": "bb65a6f1-8420-4f58-af44-af1120eca71a", "target": "194cfbd6-2191-4b8b-b634-151824476a65", "targetPort": "f22e7b73-ea24-4a5a-ab59-2c25683c8d86", "points": [{"id": "d8ca8d8f-7060-4798-976b-c79a6e10f02b", "type": "point", "x": 277.51666259765625, "y": 256}, {"id": "887d1a91-0dea-4c47-9aa0-e0d1e7006f96", "type": "point", "x": 487.5, "y": 303}], "labels": [], "width": 2, "color": "black", "curvyness": 50, "selectedColor": "rgb(0,192,255)"}, "50fe363d-6a61-4572-ae1e-17210fc1131a": {"id": "50fe363d-6a61-4572-ae1e-17210fc1131a", "type": "default", "selected": true, "source": "194cfbd6-2191-4b8b-b634-151824476a65", "sourcePort": "f6773ccb-149c-44a9-9f15-baa1c9b35a8f", "target": "ff07f909-e3dd-4cbb-80c8-613776aff827", "targetPort": "7608d615-7321-4cc6-875c-dce950a31e14", "points": [{"id": "941310cb-2420-4b3c-aff4-51c72ab58958", "type": "point", "x": 574.5, "y": 303}, {"id": "b7c5d0e4-6e23-4ed4-8f4b-f18dde0b75c7", "type": "point", "x": 746.5, "y": 338}], "labels": [], "width": 2, "color": "black", "curvyness": 50, "selectedColor": "rgb(0,192,255)"}}}, {"id": "fccfddf8-09b6-4d6a-b853-29dc3223e2ef", "type": "diagram-nodes", "isSvg": false, "transformed": true, "models": {"618d3173-beb0-4299-b9f9-bf2dbe9d3545": {"id": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "type": "custom-node", "x": 178.5, "y": 209, "ports": [{"id": "304ece8f-5580-44c2-9fbd-4a3abbbba534", "type": "mf-port", "x": 190.51666259765625, "y": 233, "name": "flow-in", "alignment": "left", "parentNode": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "links": [], "in": true, "label": "flow-in"}, {"id": "bb65a6f1-8420-4f58-af44-af1120eca71a", "type": "mf-port", "x": 272.51666259765625, "y": 250, "name": "out-0", "alignment": "right", "parentNode": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "links": ["f00701e8-f899-4111-bc02-cde9c50907b4"], "in": false, "label": "out-0"}], "options": {"id": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "name": "WS Connection", "node_key": "WsConnectionNode", "node_type": "connection", "num_in": 0, "num_out": 1, "color": "blue", "filename": "ws_connection", "doc": "WsConnectionNode\n\n    Reads a Websocket into a workflow.\n\n    Raises:\n         NodeException: any error reading web socket, converting\n            to workflow.\n    ", "option_types": {"file": {"type": "file", "label": "Test Json", "value": "", "docstring": "Json File"}}, "download_result": false, "type": "custom-node", "node_id": "618d3173-beb0-4299-b9f9-bf2dbe9d3545", "status": "unconfigured"}, "config": {"file": ""}}, "194cfbd6-2191-4b8b-b634-151824476a65": {"id": "194cfbd6-2191-4b8b-b634-151824476a65", "type": "custom-node", "x": 490.5, "y": 256, "ports": [{"id": "211e4544-b0c5-49c4-97b6-ef057cae4344", "type": "mf-port", "x": 487.5, "y": 280, "name": "flow-in", "alignment": "left", "parentNode": "194cfbd6-2191-4b8b-b634-151824476a65", "links": [], "in": true, "label": "flow-in"}, {"id": "f22e7b73-ea24-4a5a-ab59-2c25683c8d86", "type": "mf-port", "x": 482.5, "y": 297, "name": "in-0", "alignment": "left", "parentNode": "194cfbd6-2191-4b8b-b634-151824476a65", "links": ["f00701e8-f899-4111-bc02-cde9c50907b4"], "in": true, "label": "in-0"}, {"id": "f6773ccb-149c-44a9-9f15-baa1c9b35a8f", "type": "mf-port", "x": 569.5, "y": 297, "name": "out-0", "alignment": "right", "parentNode": "194cfbd6-2191-4b8b-b634-151824476a65", "links": ["50fe363d-6a61-4572-ae1e-17210fc1131a"], "in": false, "label": "out-0"}], "options": {"id": "194cfbd6-2191-4b8b-b634-151824476a65", "name": "Filter", "node_key": "FilterNode", "node_type": "manipulation", "num_in": 1, "num_out": 1, "color": "goldenrod", "filename": "filter", "doc": null, "option_types": {"filter": {"type": "string", "label": "Filter", "value": "*", "docstring": "Jmespath query to filter"}, "include": {"type": "boolean", "label": "Include", "value": true, "docstring": "Include entries found by filter"}, "data": {"type": "boolean", "label": "Output Filtered Data", "value": false, "docstring": "Output filtered data instead of original data entry"}}, "download_result": false, "type": "custom-node", "node_id": "194cfbd6-2191-4b8b-b634-151824476a65", "status": "unconfigured"}, "config": {"filter": "*", "include": true, "data": false}}, "ff07f909-e3dd-4cbb-80c8-613776aff827": {"id": "ff07f909-e3dd-4cbb-80c8-613776aff827", "type": "custom-node", "x": 749.5, "y": 291, "ports": [{"id": "df46ea9b-351e-420c-a619-84901d3d10fb", "type": "mf-port", "x": 746.5, "y": 315, "name": "flow-in", "alignment": "left", "parentNode": "ff07f909-e3dd-4cbb-80c8-613776aff827", "links": [], "in": true, "label": "flow-in"}, {"id": "7608d615-7321-4cc6-875c-dce950a31e14", "type": "mf-port", "x": 741.5, "y": 332, "name": "in-0", "alignment": "left", "parentNode": "ff07f909-e3dd-4cbb-80c8-613776aff827", "links": ["50fe363d-6a61-4572-ae1e-17210fc1131a"], "in": true, "label": "in-0"}], "options": {"id": "ff07f909-e3dd-4cbb-80c8-613776aff827", "name": "Write Json", "node_key": "WriteJsonNode", "node_type": "io", "num_in": 1, "num_out": 0, "color": "green", "filename": "write_json", "doc": "WriteJsonNode\n\n    Writes the current json to a Json file.\n\n    Raises:\n        NodeException: any error writing Json file, converting\n            from json data.\n    ", "option_types": {"file": {"type": "string", "label": "Filename", "value": null, "docstring": "CSV file to write"}, "write_mode": {"type": "select", "label": "Write Mode", "value": "append", "docstring": "Overwrite or append to file", "options": ["overwrite", "append"]}, "exclude": {"type": "string", "label": "Exclude", "value": "", "docstring": "Exclude json matching this jmespath query"}}, "download_result": true, "type": "custom-node", "node_id": "ff07f909-e3dd-4cbb-80c8-613776aff827", "status": "unconfigured"}, "config": {"file": null, "write_mode": "append", "exclude": ""}}}}]};
}


async function handleEdge(link, method) {
  const sourceId = link.getSourcePort().getNode().options.id;
  const targetId = link.getTargetPort().getNode().options.id;

  let endpoint;

  if (link.getSourcePort().options.in) {
      // If edge goes from IN port -> OUT port, reverse the ports
      endpoint = `/node/edge/${targetId}/${sourceId}`;
  } else {
      // Otherwise, keep source -> target edge
      endpoint = `/node/edge/${sourceId}/${targetId}`;
  }

  return {"edge_added": ["ee2ee3c2-ba2a-4355-89f5-753382b2119c", "206bc3bb-4cb0-4709-9036-c52360ab47b9"]};
  //return fetchWrapper(endpoint, {method: method});
}


/**
* Add edge to server-side workflow
* @param {MFLinkModel} link - JS edge to create
* @returns {Promise<Object>} - server response
*/
export async function addEdge(link) {
  return handleEdge(link, "POST");
}


/**
* Delete edge from server-side workflow
* @param {MFLinkModel} link - JS edge to delete
* @returns {Promise<Object>} - server response
*/
export async function deleteEdge(link) {
  return handleEdge(link, "DELETE");
}


/**
* Upload a data file to be stored on the server
* @param {FormData} formData - FormData with file and nodeId
* @returns {Promise<Object>} - server response
*/
export async function uploadDataFile(formData) {
  const options = {
      method: "POST",
      body: formData
  };
  return fetchWrapper("/workflow/upload", options);
}


/**
* Download file by name from server
* @param {CustomNodeModel} node - node containing file to download
* @returns {Promise<void>}
*/
export async function downloadDataFile(node) {
  // TODO: make this not a giant security problem
  let contentType;

  const payload = {...node.options, options: node.config};

  // can't use fetchWrapper because it assumes JSON response
  fetch(`/workflow/download`, {
      method: "POST",
      body: JSON.stringify(payload)
  })
      .then(async resp => {
          if (!resp.ok) return Promise.reject(await resp.json());
          contentType = resp.headers.get("content-type");
          let filename = resp.headers.get("Content-Disposition");

          if (contentType.startsWith("text")) {
              resp.text().then(data => {
                  downloadFile(data, contentType, filename);
              })
          }
      }).catch(err => console.log(err));
}


/**
* Get execution order of nodes in graph
* @returns {Promise<Object>} - server response (array of node IDs)
*/
export async function executionOrder() {
  return fetchWrapper("/workflow/execute");
}

/**
* Execute given node on server
* @param {CustomNodeModel }node - node to execute
* @returns {Promise<Object>} - server response
*/
export async function execute(node) {
  const id = node.options.id;
  return fetchWrapper(`/node/${id}/execute`);
}

/**
* Retrieves the data at the state of the specified node
* @param {string }nodeId - node identifier for an execution state
* @returns {Promise<Object>} - json respnse with the data at specified state
*/
export async function retrieveData(nodeId) {
return fetchWrapper(`/node/${nodeId}/retrieve_data`);
}
