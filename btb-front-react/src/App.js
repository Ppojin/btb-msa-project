import React, {Component} from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './Navbar';

class App extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <AppRoutes/>
      </div>
    )
  }
}

export default App;
