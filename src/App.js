import React, { Component } from 'react';
import './App.css';

// import Tasks from './components/Tasks';
import UserInput from './components/UserInput';
import { AllTasks } from './components/Tasks'


class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        <UserInput />
        {/* <Tasks /> */}
        <AllTasks />

      </div>
    );
  }
}
export default App;
