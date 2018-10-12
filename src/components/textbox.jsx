import React, { Component } from 'react';
import {extendForm} from '../helper_functions/';


class Textbox extends Component{
    constructor(props){
        super(props);
        this.state={address:[
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
    changeField = (ev)=>{
        ev.preventDefault();
      let myarr = this.state.address;
      console.log(myarr[0])
      let idx = myarr.filter((el,i,arr)=>el.active && i)

      console.log(idx)
    //   this.setState(prevState=>({address:[idx].active=false}))
    //   this.setState(prevState=>({address:[idx+1].active=true}))
    let activeField = this.state.address.find(el=>el.active);

    console.log("active field:" ,activeField)

    }
    handleSubmit=(ev)=>{
        ev.preventDefault();

        if(this.state.payload){

        }
        

        let endPoint = this.props.endPoint
        let fetchData = { 
            method: 'POST', 
            body: this.state.contents,
            headers: new Headers()
        }

        fetch(endPoint,fetchData)
            .then(res=>this.setState(prevState=>({contents:"",display:"SENT : " +  prevState.contents})))
            .then(res=>console.log("succes"))
            .catch(err=>this.setState({display:`Did not send: ${err}`}))

        
    }
    render() {

        return(
            <div >   
            <label htmlFor={this.props.boxName}>{this.props.boxName}</label>
            <input onDoubleClick={this.handleSubmit}
                     id={this.props.boxName} 
                    ref={this.inputRef} 
                    onChange={this.handleChange}
                     className={this.props.boxStyle} 
                    type="text" value={this.state.contents} placeholder={this.state.address.find(el=>el.active).ph}/>
            <button onClick={this.changeField} >+</button>
            <br/>
            <input   type="submit" value="submit" onClick={this.handleSubmit} />
            <div className={this.props.displayStyle}>{this.state.display}</div>
            </div>
        )
    }
}
//{(this.state.address.find(el=>el.active?el:null)).ph}

export default Textbox