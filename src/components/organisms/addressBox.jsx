import React, { Component } from 'react';
import InputField from '../atoms/inputField.jsx';
import Regions from '../data_assets/data.js'
import Button from '../atoms/buttons.jsx'
import {form} from 'bootstrap';
 


let country = ['UK','US']
class AddressBox extends Component {
    constructor(props) {
        super(props);
        this.state = { list: Regions.us , theme:"US"};
    }


checkCountry=(ev)=>{
    if(ev.target.value==="UK")
    this.setState({list:Regions.uk,theme:"UK"});
    else 
    this.setState({list:Regions.us,theme:"US"});
    console.log("changed selection")

}

    boxStyles = {width:"400px",height:"400px",backgroundColor:"pink",boxShadow:"2px 2px 5px gray",position:"absolute",top:"10vh",left:"40vw"}
    render() { 

        return (  
            <div className="modal-dialog vertical-align-center">
            <div className="modal-content">
            <div className="modal-header"><button type="button" className="close pull-right" data-dismiss="modal">X</button></div>
            <h4>Mailing</h4>
               <InputField inputType="input" label="Company" placeholder="Company Name" />
               <InputField inputType="input" label="Address" placeholder="Address Line 1" />
               <InputField inputType="input" label="" placeholder="Address Line 2" />
               <InputField inputType="input" label="City" placeholder="city of residence" />
               <InputField inputType="select" selection={this.state.list} label={this.state.theme==="US"?"State/Prov":"County"}placeholer="city of residence" />
               <InputField inputType="input" label={this.state.theme==="US"?"zipcode":"postcode"} placeholder={this.state.theme==="US"?"zipcode":"postcode"} />
               <InputField handler={this.checkCountry} inputType="select"  selection={["US","UK"]} label="Country" placeholer="city of residence" />
               <div className="modal-footer">
                   <Button buttName="Cancel" />
                   <Button buttName="Save" />
               </div>
            </div>
            </div> 




        );
    }
}
 
export default AddressBox;