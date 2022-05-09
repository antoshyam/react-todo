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
                        <th>Description</th>
                        <th>Due in (Days)</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList.map((task, index) => {
                            return (
                                <tr>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
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
