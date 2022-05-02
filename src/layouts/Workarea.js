import React from "react";

class Workarea extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Workarea