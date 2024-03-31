import { FaTrashCan } from "react-icons/fa6";

export function TaskListItem({ todo, onDeleteTask }) {
  return (
    <div>
      {todo}
      <button onClick={onDeleteTask}>
        <FaTrashCan />
      </button>
    </div>
  );
}
