import React from "react"

const InputText = (props) => {
    let {label, value, hasError,type, ...rest} = {...props}

    return(
        <React.Fragment>
            {label && <label>{label}</label>}
            <input type={type ? type: "text"} value={value} {...rest} style={hasError ?  {color: "red"} : {}}/>
        </React.Fragment>
    )
}

export default InputText