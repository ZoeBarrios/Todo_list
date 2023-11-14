export default function TaskItem({ task, onCheckboxClick, onDeleteClick }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onCheckboxClick(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDeleteClick(task.id)}>Borrar</button>
    </li>
  );
}
