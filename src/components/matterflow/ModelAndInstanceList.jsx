import React, { useState } from "react";
import { ListGroup, Button, InputGroup, FormControl, Tabs, Tab } from "react-bootstrap";
import ModelModal from "./ModelModal"; // Import the model modal component
import InstanceModal from "./InstanceModal"; // Import the instance modal component

const ModelAndInstanceList = () => {
  // Sample list of models with uniqueId
  const [models, setModels] = useState([
    { id: 1, uniqueId: "abc123", status: "complete", name: "model1.json" },
    { id: 2, uniqueId: "def456", status: "complete", name: "model2.json" },
    { id: 3, uniqueId: "ghi789", status: "complete", name: "model3.json" },
    { id: 4, uniqueId: "jkl012", status: "complete", name: "model4.json" },
    { id: 5, uniqueId: "mno345", status: "complete", name: "model5.json" },
    { id: 6, uniqueId: "pqr678", status: "complete", name: "model6.json" }
  ]);

  // Sample list of instances with uniqueId
  const [instances, setInstances] = useState([
    { id: 1, uniqueId: "inst123", status: "running", name: "instance1" },
    { id: 2, uniqueId: "inst456", status: "stopped", name: "instance2" },
    { id: 3, uniqueId: "inst789", status: "running", name: "instance3" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("model"); // 'model' or 'instance'

  const [renamingId, setRenamingId] = useState(null);
  const [renameValue, setRenameValue] = useState("");
  const [boldItemId, setBoldItemId] = useState(null);

  // Handler to alert the item name and make the item name bold
  const handleItemClick = (item, type) => {
    alert(`You clicked on: ${item.name}`);
    setBoldItemId(item.id); // Set the clicked item to bold
    setSelectedItem(item);
    setModalType(type);
    setShowModal(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  // Handler to delete an item (model or instance)
  const handleDelete = (id, type) => {
    if (type === "model") {
      setModels(models.filter((model) => model.id !== id));
    } else {
      setInstances(instances.filter((instance) => instance.id !== id));
    }
  };

  // Handler to start renaming an item
  const handleRename = (id, currentName) => {
    setRenamingId(id);
    setRenameValue(currentName);
  };

  // Handler to confirm renaming
  const handleRenameConfirm = (id, type) => {
    if (type === "model") {
      setModels(
        models.map((model) =>
          model.id === id ? { ...model, name: renameValue } : model
        )
      );
    } else {
      setInstances(
        instances.map((instance) =>
          instance.id === id ? { ...instance, name: renameValue } : instance
        )
      );
    }
    setRenamingId(null);
  };

  // Function to find the next unique ID for models or instances
  const getNextItemId = (type) => {
    const items = type === "model" ? models : instances;
    if (items.length === 0) return 1; // Return 1 if the array is empty
    const itemIds = items.map((item) => item.id);
    const maxId = Math.max(...itemIds); // Find the maximum existing ID
    return maxId + 1; // Return the next highest ID
  };

  // Handler to add a new item (model or instance)
  const handleAddItem = (type) => {
    const newId = getNextItemId(type);
    const newUniqueId = `unique${newId}`; // Simple unique ID
    const newItem =
      type === "model"
        ? { id: newId, uniqueId: newUniqueId, name: `newModel${newId}.json` }
        : { id: newId, uniqueId: newUniqueId, name: `newInstance${newId}` };

    if (type === "model") {
      setModels([...models, newItem]);
    } else {
      setInstances([...instances, newItem]);
    }
    setBoldItemId(newId); // Highlight the newly added item in bold
  };

  // Rendering a list of items (models or instances)
  const renderList = (items, type) => (
    <div style={{ maxHeight: "300px", overflowY: items.length > 5 ? "scroll" : "auto" }}>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item
            key={item.uniqueId} // Using uniqueId for key
            className="d-flex justify-content-between align-items-center"
          >
            {/* Item name or Rename Input */}
            {renamingId === item.id ? (
              <InputGroup size="sm" style={{ maxWidth: "200px" }}>
                <FormControl
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                />
                <Button
                  variant="outline-success"
                  onClick={() => handleRenameConfirm(item.id, type)}
                >
                  Save
                </Button>
              </InputGroup>
            ) : (
              <span
                onClick={() => handleItemClick(item, type)}
                style={{
                  cursor: "pointer",
                  fontWeight: boldItemId === item.id ? "bold" : "normal", // Make item name bold if clicked
                }}
              >
                {item.name}
              </span>
            )}

            {/* Action buttons: Rename and Delete */}
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() => handleRename(item.id, item.name)}
              >
                Rename
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(item.id, type)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );

  return (
    <div>
      <Tabs defaultActiveKey="models" id="model-instance-tabs" className="mb-3">
        <Tab eventKey="models" title="Models">
          {renderList(models, "model")}

          {/* Button to add new model */}
          <div className="mt-3 text-center">
            <Button variant="primary" onClick={() => handleAddItem("model")}>
              Add New Model
            </Button>
          </div>
        </Tab>

        <Tab eventKey="instances" title="Instances">
          {renderList(instances, "instance")}

          {/* Button to add new instance */}
          <div className="mt-3 text-center">
            <Button variant="primary" onClick={() => handleAddItem("instance")}>
              Add New Instance
            </Button>
          </div>
        </Tab>
      </Tabs>

      {/* Full-screen modal for models and instances */}
      {selectedItem && modalType === "model" && (
        <ModelModal show={showModal} handleClose={handleCloseModal} modelName={selectedItem.name} />
      )}
      {selectedItem && modalType === "instance" && (
        <InstanceModal show={showModal} handleClose={handleCloseModal} instanceName={selectedItem.name} />
      )}
    </div>
  );
};

export default ModelAndInstanceList;
