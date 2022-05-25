import React from 'react'
import InputText from '../externalComponents/InputText'

class ManageTasks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            managedTask: {},
            errors:{}
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            managedTask: this.props.task
        })
    }

    // JSON object "key" : value
    handleInputChange(event, keyName){

        //No Error handling
        if(keyName == "name" ){
            if(!this.state.managedTask[keyName] || this.state.managedTask[keyName].length < 4){
                this.setState({
                    errors: {
                        ...this.state.errors,
                        [keyName]: "Value should be atleast 4 characters."
                    }
                })
            }else{
                this.setState({
                    errors: {
                        ...this.state.errors,
                        [keyName]: undefined
                    },
                    managedTask: {}
                })
            }
        }

        this.setState({
            managedTask: {...this.state.managedTask, [keyName]: event.target.value}
        })
    }

    handleSubmit(event){
        console.log("Updated Task ", this.state.managedTask)
        event.preventDefault()
        //Handle Validation
        if(this.state.managedTask.name.length < 4){
            alert('Name should be atleast 4 characters.')
        }else{
            this.props.saveTask(this.state.managedTask)
        }

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <InputText label="Id" value={this.state.managedTask.id} disabled />
                    <InputText label="Name" value={this.state.managedTask.name} hasError={this.state.errors.name}
                        onChange={(event) => this.handleInputChange(event, "name")}/>
                    <select value={this.state.managedTask.priority} onChange={(event) => this.handleInputChange(event, "priority")}>
                        <option label='High' value={1}/>
                        <option label='Medium' value={2}/>
                        <option label='Low' value={3}/>
                    </select>
                    <InputText label="Description" value={this.state.managedTask.description} 
                        onChange={(event) => this.handleInputChange(event, "description")} />
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>

        )
    }
}

export default ManageTasks