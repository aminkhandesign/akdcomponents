import React from 'react';


function InputField(props){

let styles = props.styling || {border:"1px solid gray",borderRadius:"5px",margin:"5px"}
let handler = props.changeHandler

if(props.inputType==="input"){


    return (
            <div className="form group">
            <label className="col-md-3 control-label">{props.label}</label>
            <div className="col-md-8">
            <input  name={props.name} onChange={props.changeHandler} value={props.text} className="form-control" placeholder={props.placeholder} />
            </div>
            </div>
    )
}
else if(props.inputType==="select") {

    return (
        <div className="form-group">
            <label className="col-md-3 control-label">{props.label}</label>
            <select className="form-control form-state-list" onChange={props.handler}   name={props.label} >
                {props.selection.map(el=><option key={el} value={el}>{el}</option>)}
            </select>

        </div>
    )
    
}
return <div>Please specify inputType</div>
}

export default InputField