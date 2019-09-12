import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import Navbar from './components/Navbar';



class App extends React.Component {
  render(){
    return (
      <Router>
      <div className="container">
        <div className="row">
          <Route path="/" component={Navbar}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/setup" component={Setup}/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;