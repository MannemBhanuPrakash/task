import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { Navbar, Container } from 'react-bootstrap';



function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>ToDo List</Navbar.Brand>    
    </Container>
  </Navbar>
    <div className='todo-app'>
      <TodoList />
    </div>
    </div>
  );
}

export default App;
