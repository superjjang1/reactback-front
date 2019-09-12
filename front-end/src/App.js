import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import Navbar from './components/Navbar';



class App extends React.Component {
  state = {
    name: ""
  }
  changeName = (name) =>{
    this.setState({
      name
    })
  }
  render(){
    return (
      <Router>
      <div className="container">
        <div className="row">
          <Route path="/" component={Navbar}/>
          <Route exact path="/" render={()=><Home changeName={this.changeName} name = {this.state.name}/>} />
          <Route exact path="/setup" render={()=><Setup changeName={this.changeName} name={this.state.name}/>}/>
        </div>
      </div>
      </Router>
    )
  }
}


export default App;