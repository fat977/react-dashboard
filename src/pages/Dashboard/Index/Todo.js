import { useState } from "react";
import { Button , Form , ListGroup} from '../../../components/bootstrapComponent'


export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // Clear the input field
    }
  };

  // Toggle task completion using the checkbox
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="todo bg-white rounded-2 p-5">
      <h3 className="text-center mb-4">📝 My To-Do List</h3>

      {/* Add Task Form */}
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formTask">
          <Form.Control
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addTask} className="w-100">
          Add Task
        </Button>
      </Form>

      {/* Task List */}
      <ListGroup className="mt-4">
        {tasks.map((t, index) => (
          <ListGroup.Item
            key={index}
            variant={t.completed ? "success" : ""}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex">
            <Form.Check
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(index)}
            />
            <Form.Check.Label
              htmlFor="custom-checkbox"
              className={`ms-2 ${
                t.completed ? "text-decoration-line-through" : ""
              }`}
            >
             {t.text}
            </Form.Check.Label>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTask(index)}
            >
              🗑️
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {tasks.length === 0 && (
        <p className="text-center mt-4 text-muted">No tasks available.</p>
      )}
    </div>
  );
}
