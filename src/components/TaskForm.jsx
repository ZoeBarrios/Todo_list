export default function TaskForm({ taskTitle, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={onChange}
        placeholder="tarea"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
