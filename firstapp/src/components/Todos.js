import React,{Component} from 'react';
import Todoitem from './Todoitem';
// import './Todos.css';
// import Addtodo from './Addtodo';
import PropTypes from 'prop-types';

class Todos extends Component{
  
  render(){
      return this.props.todos.map((t)=>(
      <div>
        <Todoitem key={t.id} todo={t} mark={this.props.mark} deltodo={this.props.deltodo}/>
        
        </div>)
        );
  }
}

Todos.propTypes={
  todos:PropTypes.array.isRequired
}
export default Todos;
 