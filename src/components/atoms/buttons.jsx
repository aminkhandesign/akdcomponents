import React from 'react';

const Button  = (props)=><button className={props.buttName==="Save"?"btn btn-primary":"btn btn-secondary"}>{props.buttName}</button>


export default Button