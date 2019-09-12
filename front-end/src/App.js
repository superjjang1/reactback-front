import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



class App extends React.Component {
  render(){
    return (
      <Router>
      <div className="container">
        <div className="row">
          <Route exact path="/" component={Home}/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;