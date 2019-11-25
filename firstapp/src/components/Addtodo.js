import React, { Component } from 'react';
import './addtodo.css'
export class Addtodo extends Component {
   state={
       title:""
   }
    getstyle = () => {
        return {
            
        }
    }
   onChange=(e)=>{ this.setState({title:e.target.value});}
   onSubmit=(e)=>{this.props.addtodo(this.state.title);this.setState({title:""})}
   render() {
        return (
            <div style={{paddingLeft:"3px",paddingRight:"3px" ,marginBottom:"15px"}}>
                <form onSubmit={this.onSubmit}>
               <input type="textbox" value={this.state.title} onChange={this.onChange} placeholder="    Todo...." style={{boxShadow:"2px 2px 4px black",width:"428px",height:"30px",borderRadius:"20px",outline:"none"}}/> <input type="button" onClick={this.onSubmit} value="Add" style={{boxShadow:" 2px 2px 4px black",backgroundColor:"grey",height:"32px",width:"52px",borderRadius:"20px",outline:"none"}} />
               </form>
            </div>
        )
    }
}



export default Addtodo
