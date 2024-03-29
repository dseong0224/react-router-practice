import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Games from './Games';
import GameDetail from './GameDetail';
import Nav from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/games" exact component={Games} />
              <Route path="/games/:gameId" component={GameDetail}/>
            </Switch>
          </div>
        </Router>
      </div >
    );
  }

}




export default App;
