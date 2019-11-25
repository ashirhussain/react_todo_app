import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todoitem.css';
export class Todoitem extends Component {
    getstyle=()=>{
        return{
            // background:'lightGrey',
            // backgroundImage: li,
            padding:'2px',
            // paddingLeft:'25px',
            textDecoration:this.props.todo.done ?
            'line-through' :'none',
            // borderBottom:'10px',
            // border:'1px #000 solid',
            borderRadius:'20px',
            marginBottom:"8px",
            boxShadow:"1px 1px 4px black"
            
            
            // textAlign:'center'
        }
    }
    
    render() {
        const{id,title}=this.props.todo
        return (
            <div className="todos" style={this.getstyle()}>
               
                <p> <input  type="checkbox" onChange={this.props.mark.bind(this,id)} style={{height:"15px",width:"14px",background:"#000", margin:'8px',position:"relative",backgroundColor:"blue"}}/>{'  '}{title} <button onClick={this.props.deltodo.bind(this,id)}  style={btnstyle}>x</button></p>
               
            </div>
        )
    }
}

Todoitem.propTypes={
    todo:PropTypes.object.isRequired
}
const btnstyle={
   background:'#e61919',
   color:'#fff',
   border:'none',
   padding :'5px 10px',
   borderRadius:'12px 12px',
   float:'right',
   marginRight:'6px',
   marginTop:'3px',
   
}
export default Todoitem
