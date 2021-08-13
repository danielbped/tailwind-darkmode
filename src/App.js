import React, { Component } from "react";
import ToggleButton from './ToggleButton';

class App extends Component {
  render() {
    return (
      <div className="bg-white dark:bg-gray-800 transition duration-1000 h-screen flex flex-col justify-center items-center">
        <ToggleButton />
      </div>
    );
  }
}

export default App;
