import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import Income from './components/Income';




class App extends React.Component {
  state = {
    name: ""
  }
  setDudeInfo = (dudeInfo) => {
    this.setState({
      dudeInfo
    })
  }
  changeName = (e) =>{
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return (
      <Router>
      <div className="container">
        <div className="row">
          <Route path="/" component={Navbar}/>
          <Route exact path="/" render={()=><Home changeName={this.changeName} name = {this.state.name} setDudeInfo={this.setDudeInfo}/>} />
          <Route exact path="/setup" render={()=><Setup changeName={this.changeName} name={this.state.name}/>}/>
          <Route path="/add-expense" render={()=><Expenses dudeInfo={this.state.dudeInfo}/>} />
          <Route path="/add-income" render={()=><Income dudeInfo={this.state.dudeInfo}/>} />
        </div>
      </div>
      </Router>
    )
  }
}


export default App;