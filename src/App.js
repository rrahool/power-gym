import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import NavBar from './components/NavBar/NavBar';
import Classes from './components/Classes/Classes';
import InsertData from './components/InsertData/InsertData';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/classes' exact component={Classes}/>
        <Route path='/pricing' exact component={Pricing}/>
        <Route path='/insert_data' component={InsertData}/>
      </Switch>
    </Router>
  );
}

export default App;
