export function TaskInput({ task, onTaskChange, onAddTask }) {
	return (
	  <div>
		<input value={task} onChange={(ev) => onTaskChange(ev.target.value)} />
		<button onClick={onAddTask}>Add</button>
	  </div>
	);
  }
  
