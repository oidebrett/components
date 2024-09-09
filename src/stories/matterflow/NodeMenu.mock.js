export const nodes = {
      "Manipulation": [
        {
          "name": "Pivoting",
          "node_key": "PivotNode",
          "node_type": "manipulation",
          "num_in": 1,
          "num_out": 3,
          "color": "goldenrod",
          "filename": "pivot",
          "doc": null,
          "options": {
            "index": null,
            "values": null,
            "columns": null,
            "aggfunc": "mean",
            "fill_value": null,
            "margins": false,
            "dropna": true,
            "margins_name": "All",
            "observed": false
          },
          "option_types": {
            "index": {
              "type": "string",
              "label": "Index",
              "value": null,
              "docstring": "Column to aggregate (column, grouper, array or list)"
            },
            "values": {
              "type": "string",
              "label": "Values",
              "value": null,
              "docstring": "Column name to use to populate new frame's values (column, grouper, array or list)"
            },
            "columns": {
              "type": "string",
              "label": "Column Name Row",
              "value": null,
              "docstring": "Column(s) to use for populating new frame values. (column, grouper, array or list)"
            },
            "aggfunc": {
              "type": "string",
              "label": "Aggregation function",
              "value": "mean",
              "docstring": "Function used for aggregation (function, list of functions, dict, default numpy.mean)"
            },
            "fill_value": {
              "type": "string",
              "label": "Fill value",
              "value": null,
              "docstring": "Value to replace missing values with (scalar)"
            },
            "margins": {
              "type": "boolean",
              "label": "Margins name",
              "value": false,
              "docstring": "Add all rows/columns"
            },
            "dropna": {
              "type": "boolean",
              "label": "Drop NaN columns",
              "value": true,
              "docstring": "Ignore columns with all NaN entries"
            },
            "margins_name": {
              "type": "string",
              "label": "Margins name",
              "value": "All",
              "docstring": "Name of the row/column that will contain the totals when margins is True"
            },
            "observed": {
              "type": "boolean",
              "label": "Column Name Row",
              "value": false,
              "docstring": "Row number with column names (0-indexed) or \"infer\""
            }
          },
          "download_result": false
        },
        {
          "name": "Mapping",
          "node_key": "MappingNode",
          "node_type": "manipulation",
          "num_in": 1,
          "num_out": 1,
          "color": "goldenrod",
          "filename": "mapping",
          "doc": null,
          "options": {
            "modelmapping": null
          },
          "option_types": {
            "modelmapping": {
              "type": "instanceselect",
              "label": "ModelMapping",
              "value": null,
              "docstring": null,
              "options": []
            }
          },
          "download_result": false
        },
        {
          "name": "Joiner",
          "node_key": "JoinNode",
          "node_type": "manipulation",
          "num_in": 2,
          "num_out": 1,
          "color": "goldenrod",
          "filename": "join",
          "doc": null,
          "options": {
            "on": null
          },
          "option_types": {
            "on": {
              "type": "string",
              "label": "Join Column",
              "value": null,
              "docstring": "Name of column to join on"
            }
          },
          "download_result": false
        },
        {
          "name": "Combiner",
          "node_key": "CombineNode",
          "node_type": "manipulation",
          "num_in": 2,
          "num_out": 1,
          "color": "goldenrod",
          "filename": "combine",
          "doc": null,
          "options": {},
          "option_types": {},
          "download_result": false
        },
        {
          "name": "Unflatten",
          "node_key": "UnflattenNode",
          "node_type": "manipulation",
          "num_in": 1,
          "num_out": 1,
          "color": "goldenrod",
          "filename": "unflatten",
          "doc": null,
          "options": {},
          "option_types": {},
          "download_result": false
        },
        {
          "name": "Filter",
          "node_key": "FilterNode",
          "node_type": "manipulation",
          "num_in": 1,
          "num_out": 1,
          "color": "goldenrod",
          "filename": "filter",
          "doc": null,
          "options": {
            "filter": "*",
            "include": true,
            "data": false
          },
          "option_types": {
            "filter": {
              "type": "string",
              "label": "Filter",
              "value": "*",
              "docstring": "Jmespath query to filter"
            },
            "include": {
              "type": "boolean",
              "label": "Include",
              "value": true,
              "docstring": "Include entries found by filter"
            },
            "data": {
              "type": "boolean",
              "label": "Output Filtered Data",
              "value": false,
              "docstring": "Output filtered data instead of original data entry"
            }
          },
          "download_result": false
        }
      ],
      "Visualization": [
        {
          "name": "Graph Node",
          "node_key": "GraphNode",
          "node_type": "visualization",
          "num_in": 1,
          "num_out": 0,
          "color": "red",
          "filename": "graph",
          "doc": "Displays a pandas DataFrame in a visual graph.\n\n Raises:\n NodeException: any error generating Altair Chart.\n ",
          "options": {
            "graph_type": "bar",
            "mark_options": false,
            "width": 10,
            "height": 10,
            "encode_options": true,
            "x_axis": "a",
            "y_axis": "average(b)"
          },
          "option_types": {
            "graph_type": {
              "type": "select",
              "label": "Graph Type",
              "value": "bar",
              "docstring": "Graph viz type",
              "options": [
                "area",
                "bar",
                "line",
                "point"
              ]
            },
            "mark_options": {
              "type": "boolean",
              "label": "Specify mark options",
              "value": false,
              "docstring": "Specify mark options"
            },
            "width": {
              "type": "int",
              "label": "Mark width",
              "value": 10,
              "docstring": "Width of marks"
            },
            "height": {
              "type": "int",
              "label": "Mark height",
              "value": 10,
              "docstring": "Height of marks"
            },
            "encode_options": {
              "type": "boolean",
              "label": "Specify encoding options",
              "value": true,
              "docstring": "Specify encoding options"
            },
            "x_axis": {
              "type": "string",
              "label": "X-Axis",
              "value": "a",
              "docstring": "X-axis values"
            },
            "y_axis": {
              "type": "string",
              "label": "Y-Axis",
              "value": "average(b)",
              "docstring": "Y-axis values"
            }
          },
          "download_result": false
        }
      ],
      "Connection": [
        {
          "name": "WS Connection",
          "node_key": "WsConnectionNode",
          "node_type": "connection",
          "num_in": 0,
          "num_out": 1,
          "color": "blue",
          "filename": "ws_connection",
          "doc": "WsConnectionNode\n\n Reads a Websocket into a workflow.\n\n Raises:\n NodeException: any error reading web socket, converting\n to workflow.\n ",
          "options": {
            "file": ""
          },
          "option_types": {
            "file": {
              "type": "file",
              "label": "Test Json",
              "value": "",
              "docstring": "Json File"
            }
          },
          "download_result": false
        }
      ],
      " Pycache ": [],
      "I/O": [
        {
          "name": "Table Creator",
          "node_key": "TableCreatorNode",
          "node_type": "io",
          "num_in": 0,
          "num_out": 1,
          "color": "green",
          "filename": "table_creator",
          "doc": "Accepts raw-text CSV input to create data tables.\n\n Raises:\n NodeException: any error reading CSV file, converting\n to DataFrame.\n ",
          "options": {
            "input": "",
            "sep": ",",
            "header": "infer"
          },
          "option_types": {
            "input": {
              "type": "text",
              "label": "Input",
              "value": "",
              "docstring": "Text input"
            },
            "sep": {
              "type": "string",
              "label": "Delimiter",
              "value": ",",
              "docstring": "Column delimiter"
            },
            "header": {
              "type": "string",
              "label": "Header Row",
              "value": "infer",
              "docstring": "Row number containing column names (0-indexed)"
            }
          },
          "download_result": false
        },
        {
          "name": "Write Json",
          "node_key": "WriteJsonNode",
          "node_type": "io",
          "num_in": 1,
          "num_out": 0,
          "color": "green",
          "filename": "write_json",
          "doc": "WriteJsonNode\n\n Writes the current json to a Json file.\n\n Raises:\n NodeException: any error writing Json file, converting\n from json data.\n ",
          "options": {
            "file": null,
            "write_mode": "append",
            "exclude": ""
          },
          "option_types": {
            "file": {
              "type": "string",
              "label": "Filename",
              "value": null,
              "docstring": "CSV file to write"
            },
            "write_mode": {
              "type": "select",
              "label": "Write Mode",
              "value": "append",
              "docstring": "Overwrite or append to file",
              "options": [
                "overwrite",
                "append"
              ]
            },
            "exclude": {
              "type": "string",
              "label": "Exclude",
              "value": "",
              "docstring": "Exclude json matching this jmespath query"
            }
          },
          "download_result": true
        },
        {
          "name": "Write CSV",
          "node_key": "WriteCsvNode",
          "node_type": "io",
          "num_in": 1,
          "num_out": 0,
          "color": "green",
          "filename": "write_csv",
          "doc": "WriteCsvNode\n\n Writes the current DataFrame to a CSV file.\n\n Raises:\n NodeException: any error writing CSV file, converting\n from DataFrame.\n ",
          "options": {
            "file": null,
            "sep": ",",
            "index": true
          },
          "option_types": {
            "file": {
              "type": "string",
              "label": "Filename",
              "value": null,
              "docstring": "CSV file to write"
            },
            "sep": {
              "type": "string",
              "label": "Delimiter",
              "value": ",",
              "docstring": "Column delimiter"
            },
            "index": {
              "type": "boolean",
              "label": "Write Index",
              "value": true,
              "docstring": "Write index as column?"
            }
          },
          "download_result": true
        },
        {
          "name": "Read Json",
          "node_key": "ReadJsonNode",
          "node_type": "io",
          "num_in": 0,
          "num_out": 1,
          "color": "green",
          "filename": "read_json",
          "doc": "ReadJsonNode\n\n Reads a Json file into a workflow.\n\n Raises:\n NodeException: any error reading json file, converting\n to workflow.\n ",
          "options": {
            "file": null
          },
          "option_types": {
            "file": {
              "type": "file",
              "label": "File",
              "value": null,
              "docstring": "Json File"
            }
          },
          "download_result": false
        },
        {
          "name": "Read CSV",
          "node_key": "ReadCsvNode",
          "node_type": "io",
          "num_in": 0,
          "num_out": 1,
          "color": "green",
          "filename": "read_csv",
          "doc": "ReadCsvNode\n\n Reads a CSV file into a pandas DataFrame.\n\n Raises:\n NodeException: any error reading CSV file, converting\n to DataFrame.\n ",
          "options": {
            "file": null,
            "sep": ",",
            "header": "infer"
          },
          "option_types": {
            "file": {
              "type": "file",
              "label": "File",
              "value": null,
              "docstring": "CSV File"
            },
            "sep": {
              "type": "string",
              "label": "Delimiter",
              "value": ",",
              "docstring": "Column delimiter"
            },
            "header": {
              "type": "string",
              "label": "Header Row",
              "value": "infer",
              "docstring": "Row number containing column names (0-indexed)"
            }
          },
          "download_result": false
        }
      ],
      "Flow Control": [
        {
          "name": "String Input",
          "node_key": "StringNode",
          "node_type": "flow_control",
          "num_in": 0,
          "num_out": 0,
          "color": "purple",
          "filename": "string_input",
          "doc": "StringNode object\n\n Allows for Strings to replace 'string' fields in Nodes\n ",
          "options": {
            "default_value": null,
            "var_name": "my_var"
          },
          "option_types": {
            "default_value": {
              "type": "string",
              "label": "Default Value",
              "value": null,
              "docstring": "Value this node will pass as a flow variable"
            },
            "var_name": {
              "type": "string",
              "label": "Variable Name",
              "value": "my_var",
              "docstring": "Name of the variable to use in another Node"
            }
          },
          "download_result": false
        },
        {
          "name": "Integer Input",
          "node_key": "IntegerNode",
          "node_type": "flow_control",
          "num_in": 0,
          "num_out": 0,
          "color": "purple",
          "filename": "integer_input",
          "doc": "StringNode object\n\n Allows for Strings to replace 'string' fields in Nodes\n ",
          "options": {
            "default_value": null,
            "var_name": "my_var"
          },
          "option_types": {
            "default_value": {
              "type": "int",
              "label": "Default Value",
              "value": null,
              "docstring": "Value this node will pass as a flow variable"
            },
            "var_name": {
              "type": "string",
              "label": "Variable Name",
              "value": "my_var",
              "docstring": "Name of the variable to use in another Node"
            }
          },
          "download_result": false
        }
      ],
      "Custom Nodes": []
    }