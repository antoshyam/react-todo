import React from 'react'
import taskList from '../assets/taskList.json'
import ListTasks from '../view/ListTasks'
import ManageTasks from '../view/ManageTasks'

class ToDoContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            managedTask: null,
            taskList: [
                {
                    "id": 1,
                    "name": "Task 1",
                    "description": "Some task"
                },
                {
                    "id": 2,
                    "name": "Task 2",
                    "description": "Some task"
                },
                {
                    "id": 3,
                    "name": "Task 3",
                    "description": "Some task"
                },
                {
                    "id": 4,
                    "name": "Task 4",
                    "description": "Some task"
                }

            ]
        }

        this.addTask = this.addTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.saveTask = this.saveTask.bind(this)
    }

    addTask(task) {
        this.setState({
            taskList: [...this.state.taskList, task]
        })
    }

    editTask(task) {
        this.setState({
            managedTask: task
        })
    }

    saveTask(updatedTask) {
        let newTaskList = [...this.state.taskList]

        let updatedTaskIndex = this.state.taskList.findIndex(task => task.id == updatedTask.id)

        newTaskList[updatedTaskIndex] = updatedTask

        this.setState({
            taskList: newTaskList,
            managedTask: null
        })
    }

    render() {
        return (
            this.state.managedTask ?
                <ManageTasks task={this.state.managedTask} addTask={this.addTask} saveTask={this.saveTask}/>
                :
                <ListTasks taskList={this.state.taskList} editTask={this.editTask}/>
        )
    }


}

export default ToDoContainer