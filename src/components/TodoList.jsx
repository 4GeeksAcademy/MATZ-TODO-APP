import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export function TodoList() {
  const [todos, setTodos] = useState(["Buy groceries", "Walk dog"]);
  const [task, setTask] = useState("");
  const [todosVersions, setTodosVersions] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTodos = [task.trim(), ...todos];
      setTodos(newTodos);
      setTask("");
    }
  };

  const handleDeleteTaskIndex = (indexToRemove) => {
    const newArray = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newArray);
  };

  const handleBack = () => {
    const newVersion = [...todosVersions];
    newVersion.pop();
    const last = newVersion.pop();
    setTodosVersions(newVersion);
    setTodos(last);
  };

  useEffect(() => {
    setTodosVersions([...todosVersions, [...todos]]);
  }, [todos]);

  return (
    <>
      <TaskInput task={task} onTaskChange={setTask} onAddTask={handleAddTask} />
      <TaskList todos={todos} onDeleteTaskIndex={handleDeleteTaskIndex} />
      <button onClick={handleBack}>Undo</button>
    </>
  );
}