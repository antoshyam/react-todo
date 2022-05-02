import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                {this.props.footer}
                Copyright info
            </div>
        )
    }
}

export default Footer