import React from 'react'
import ToDoContainer from './containers/ToDoContainer'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Workarea from './layouts/Workarea'

class App extends React.Component{
    render(){
        return (
            <div>
                <Header header="This is my Header"/>
                <Workarea>
                    <ToDoContainer/> 
                </Workarea>
                <Footer footer="Am a footer"/>
            </div>
        )

    }
}

export default App