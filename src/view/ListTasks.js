import React from 'react'

export default function ListTasks(props){

    let {
        taskList,
        editTask
    } = {...props}

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task Name</th>
                    <th>Description</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskList.map((task) => {
                        return(
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <button onClick={() => editTask(task)}>Edit</button>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
