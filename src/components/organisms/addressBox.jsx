import React, { Component } from 'react';
import InputField from '../atoms/inputField.jsx';
import Regions from '../data_assets/data.js'
import Button from '../atoms/buttons.jsx'
import {form} from 'bootstrap';
 


let country = ['UK','US'];
const postObj = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow", 
    referrer: "no-referrer",
}

class AddressBox extends Component {
    constructor(props) {
        super(props);
        this.state = { list: Regions.us , theme:"US", payload:{company:"",address:{line1:"",line2:"",city:"",state:"",zip:"",country:"US"}}};
    }



checkCountry=(ev)=>{
    if(ev.target.value==="UK"){
    this.setState({list:Regions.uk,theme:"UK"});
    }
    else {
    this.setState({list:Regions.us,theme:"US"});
    console.log("changed selection")
    }
    let address = {...this.state.payload.address};
    address.country=ev.target.value
    this.setState(address)

}

//event handlers
inputHandler=(ev)=>{
    ev.persist()
    console.log("INPUT FIELD:", ev.target.name  || "No Name seen")
    if (ev.target.name==="company"){
this.setState(prevState=>({payload:{company:ev.target.value,address:prevState.payload.address}}))
    }

    else{
        this.setState(prevState=>({...prevState,payload:{address:{...prevState.payload.address, [ev.target.name]:ev.target.value}}}))
    }

}
handleCancel=(ev)=>{
    this.setState(prevState=>({payload: {company:"",address:{line1:"",line2:"",city:"",state:"",zip:"",country:""}  }   } ))
    console.log("Cancelled state:" , this.state.payload.address)
}

handleSave=(ev)=>{
    console.log(this.state.payload);
    let unfilled = []
    let validate=(obj)=>{
        for(let key in obj){
            console.log("THIS IS THE KEY::",key)
            if(obj[key].constructor===Object){
                console.log(key, "IS AN OBJECT!!")
                validate(obj[key])
                
            }
            if (obj[key] ==="") {
                unfilled.push(key)
                validate(obj[key])
            }
         
        }
        if(unfilled.length){
            alert(`please fill ${unfilled.join(",")}`);
            return null
        }
        return {...obj}

    }
    validate(this.state.payload)
    let res=JSON.stringify(validate(this.state.payload));
      fetch(this.props.endpoint, {...postObj,body:res}).then(res=>console.log("data sent")).catch(err=>console.log("error sending data"));
      console.log("JSON::" ,res);
        this.handleCancel()
    }


    boxStyles = {width:"400px",height:"400px",backgroundColor:"pink",boxShadow:"2px 2px 5px gray",position:"absolute",top:"10vh",left:"40vw"}
    render() { 

        return (  
            <div className="modal-dialog vertical-align-center">
            <div className="modal-content" >
            <div className="modal-header"><h4>Mailing</h4><button type="button" className="close pull-right" data-dismiss="modal">X</button></div>
            <div className="col-sm-12">
               <InputField  changeHandler={this.inputHandler} text={this.state.payload.company} inputType="input" name="company" label="Company" placeholder="Company Name" />
               <InputField changeHandler={this.inputHandler} text={this.state.payload.address.line1} inputType="input" name="line1" label="Address"  placeholder="Address Line 1" />
               <InputField changeHandler={this.inputHandler} text={this.state.payload.address.line2} inputType="input"  name="line2" label=""placeholder="Address Line 2" />
               <InputField changeHandler={this.inputHandler} text={this.state.payload.address.city} inputType="input" name="city" label="City"  placeholder="city of residence" />
               <InputField  inputType="select" selection={this.state.list} name="state" label={this.state.theme==="US"?"State/Prov":"County"}placeholer="city of residence" />
               <InputField changeHandler={this.inputHandler} text={this.state.payload.address.zip} inputType="input" name="zip" label={this.state.theme==="US"?"zipcode":"postcode"} placeholder={this.state.theme==="US"?"zipcode":"postcode"} />
               <InputField  handler={this.checkCountry} name="country" inputType="select"  selection={["US","UK"]} label="Country" placeholer="city of residence" />
               </div>
               <div className="modal-footer">
                   <Button clickHandler={this.handleCancel} buttName="Cancel" />
                   <Button clickHandler={this.handleSave} buttName="Save" />
               </div>
            </div>
            </div> 




        );
    }
}

 
export default AddressBox;