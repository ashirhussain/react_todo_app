import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import About from './components/pages/About';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v1(),
        title: "magrib namaz",
        done: false

      },
      {
        id: uuid.v1(),
        title: "hair cutting",
        done: false

      },
      {
        id: uuid.v1(),
        title: "dinners",
        done: false

      }
    ]
  }
  mark = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) { todo.done = !todo.done } return todo;
      })
    }
    )
  }
  addtodo = (title) => {
    if(title){
    this.setState({
      todos: [...this.state.todos, {
        id: uuid.v1(), title, done: false
      }]
    })
  }
else{}
  }
  deltodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (<React.Fragment>
            <Addtodo addtodo={this.addtodo} />
            <Todos todos={this.state.todos} mark={this.mark} deltodo={this.deltodo} />
          </React.Fragment>)} />

          <Route path="/about" component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
