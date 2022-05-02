import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                {this.props.header}
            </div>
        )
    }
}

export default Header