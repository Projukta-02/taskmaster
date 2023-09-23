export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit=(id) => {
        const selectedTask = tasklist.find(todo => todo.id===id);
        setTask(selectedTask);
    }

    const handleDelete=(id) => {
        const updatedTasklist= tasklist.filter(todo => todo.id !==id);
        setTasklist(updatedTasklist);
    }

  return (
    <section className="showTask">
        <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </span>
                <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
        </p>
        <ul>
            { tasklist.map((task) => (
                <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">2:09:01 AM 9/14/2030</span>
                    </p>
                    <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                    <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                </li>
            ))}
        </ul>
    </section>
  )
}
