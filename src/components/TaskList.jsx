export default funtion TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
}