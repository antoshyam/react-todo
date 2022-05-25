import React from 'react'
import InputText from '../externalComponents/InputText'

export default function ListTasks(props) {

    let {
        taskList,
        editTask,
        deleteTask,
        addTask,
        editTaskInline
    } = { ...props }

    return (
        <div>
            <button onClick={() => addTask()}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task Name</th>
                        <th>Priority</th>
                        <th>Description</th>
                        <th>Due in (Days)</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {//v17 - keys - Id for each component that needs to uniquw within its siblings.
                        //4 values -- 
                        taskList.map((task, index) => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
                                    <td>
                                        <select value={task.priority}
                                            onChange={(event) => editTaskInline(event.target.value, "priority", index)}>
                                            <option label='High' value={1} />
                                            <option label='Medium' value={2} />
                                            <option label='Low' value={3} />
                                        </select>
                                    </td>
                                    <td>{task.description}</td>
                                    <td>
                                        <InputText value={task.dueBy} type={"number"}
                                            onChange={(event) => editTaskInline(event.target.value, "dueBy", index)}
                                        />
                                    </td>
                                    <td><button onClick={() => editTask(task)}>Edit</button></td>
                                    <td><button onClick={() => deleteTask(task)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
