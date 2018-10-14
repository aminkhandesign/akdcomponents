import React, { Component } from 'react';
import {extendForm} from '../helper_functions/';


class Textbox extends Component{
    constructor(props){
        super(props);
        this.state={fields:[
                            {type: "appt",ph:"Please enter house/appt number", value:"",active:true},
                            {type:"street",ph:"Please enter street",value:"",active:false},
                            {type:"city",ph:"Enter your city",value:"",active:false},
                            {type:"zip",ph:"Enter ZIP",value:"",active:false}
                            ], 
                         display:"",
                         payload:{num:"",street:"",city:"",zip:""},
                        contents:""};
        this.inputRef=React.createRef()
    }


    handleChange=(ev)=>{
            let text = ev.target.value;
            text  = text.charAt(0).toUpperCase() + text.slice(1);  
            this.setState({contents:text,error:"",line:0})
        
    }
    handleEnter=(ev)=>{
            if(ev.which===13){
                this.changeField(ev);
            }
    }
    changeField = (ev)=>{
        ev.preventDefault();
    let myarr = this.state.address;

    let idx = this.state.address.find(el=>el.active);


    idx = myarr.indexOf(idx);
    switch (myarr[idx].type){
        case "appt":
         if(this.state.contents!=="")this.setState(prevState=>(this.state.payload.num = this.state.contents))  
         break;
         case "street":
         if(this.state.contents!=="")this.setState(prevState=>(this.state.payload.street = this.state.contents))  
         break;
         case "appt":
         if(this.state.contents!=="")this.setState(prevState=>(this.state.payload.num = this.state.contents))  
         break;
         case "city":
         if(this.state.contents!=="")this.setState(prevState=>(this.state.payload.city = this.state.contents))  
         break;
         case "zip":
         if(this.state.contents!=="")this.setState(prevState=>(this.state.payload.zip = this.state.contents))  
         break;
    }
    myarr[idx].active=!myarr[idx].active;
    myarr[idx!==(myarr.length-1)?idx+1:0].active=true

    this.setState({contents:""})

    }
    handleSubmit=(ev)=>{
        ev.preventDefault();

        if(this.state.payload){

        }
        

        let endPoint = this.props.endPoint
        let fetchData = { 
            method: 'POST', 
            body: this.state.payload,
            headers: new Headers()
        }

        fetch(endPoint,fetchData)
            .then(res=>this.setState(prevState=>({contents:"",display:"SENT : " +  prevState.contents})))
            .then(res=>console.log("succes"))
            .catch(err=>this.setState({display:`Did not send: ${err}`}))

        
    }

    generateDisplay = (payload)=>{
        let formArray=[]
        for(let i in payload){
            if(payload[i]!=="")
            formArray.push(<div className="display-box"><span className="bolder">{i}</span> : {payload[i]} </div>)
        }

         return formArray
    }
    render() {
        let ph =  this.state.address.find(el=>el.active).ph
        return(
            <div >   
            <label htmlFor={this.props.boxName}>{this.props.boxName}</label>
            <input onDoubleClick={this.handleSubmit}
                     id={this.props.boxName} 
                    ref={this.inputRef} 
                    onChange={this.handleChange}
                     className={this.props.boxStyle} 
                    type="text" 
                    onKeyPress={this.handleEnter}
                    value={this.state.contents} 
                    placeholder={ph}/>
            <button onClick={this.changeField} type="submit">+</button>
            <br/>
            <div className={this.props.displayStyle}>
            {this.generateDisplay(this.state.payload)}
            </div>
            <input   type="submit" value="submit" onClick={this.handleSubmit} />
            </div>
        )
    }
}
//{(this.state.address.find(el=>el.active?el:null)).ph}

export default Textbox