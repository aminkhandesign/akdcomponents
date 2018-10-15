import React from 'react';


function InputField(props){

let styles = props.styling || {border:"1px solid gray",borderRadius:"5px",margin:"5px"}

if(props.inputType==="input"){
    return (
            <div>
            <label>{props.label}</label>
            <input style={styles} placeholder={props.placeholder} />
            </div>
    )
}
else if(props.inputType==="select") {

    return (
        <div>
            <label>{props.label}</label>
            <select onChange={props.handler}  style={styles} name={props.label} >
                {props.selection.map(el=><option key={el} value={el}>{el}</option>)}
            </select>

        </div>
    )
    
}
return <div>Please specify inputType</div>
}

export default InputField