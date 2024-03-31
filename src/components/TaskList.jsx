import { TaskListItem } from "./TaskListItem";

export function TaskList({ todos, onDeleteTaskIndex }) {
  return todos.map((element, index) => (
    <TaskListItem
      key={element}
      todo={element}
      onDeleteTask={() => onDeleteTaskIndex(index)}
    />
  ));
}
