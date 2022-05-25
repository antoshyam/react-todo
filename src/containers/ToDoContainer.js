import React from 'react'
import taskList from '../assets/taskList.json'
import ListTasks from '../view/ListTasks'
import ManageTasks from '../view/ManageTasks'

class ToDoContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            managedTask: null, // const[managedTask, set ManagedTask] = useState(null)
            taskList: taskList
        }

        this.addTask = this.addTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.saveTask = this.saveTask.bind(this)
        this.editTaskInline = this.editTaskInline.bind(this)
    }

    editTaskInline = (value, keyName, index)=> {
        let newTaskList = [...this.state.taskList]

        let updatedTask = newTaskList[index]
        let parsedValue = parseInt(value)

        if(!isNaN(parsedValue)) {
            updatedTask[keyName] = value
            this.setState({
                taskList: newTaskList
            })
        }
    }

    addTask() {
        //API call to fetch next sequence from your DB.
        let newTask = {
            id: this.state.taskList.length + 1
        }

        this.setState({
            managedTask: newTask
        })
    }

    editTask(task) {
        this.setState({
            managedTask: task
        })
    }

    deleteTask(deletedTask) {
        let newTaskList = [...this.state.taskList]

        newTaskList = this.state.taskList.filter(task => task.id != deletedTask.id)

        this.setState({
            taskList: newTaskList
        })
    }

    saveTask(updatedTask) {
        let newTaskList = [...this.state.taskList]

        let updatedTaskIndex = this.state.taskList.findIndex(task => task.id == updatedTask.id)

        if (updatedTaskIndex != -1)
            newTaskList[updatedTaskIndex] = updatedTask
        else
            newTaskList = [...newTaskList, updatedTask]

        this.setState({
            taskList: newTaskList,
            managedTask: null
        })
    }

    render() {
        return (
            this.state.managedTask ?
                <ManageTasks task={this.state.managedTask} saveTask={this.saveTask} />
                :
                <ListTasks taskList={this.state.taskList}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    addTask={this.addTask}
                    editTaskInline={this.editTaskInline}
                />
        )
    }


}

export default ToDoContainer