import React from 'react';
import TodoList from './Components/TodoList';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <div className="App">
    <CssBaseline />
    <Container>
      <TodoList />
    </Container>
  </div>
  );
}

export default App;
