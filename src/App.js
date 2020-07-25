import React from 'react';
// import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
const Layout = React.lazy(() => import('./containers/Layout'));

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route path="/" name="Home" render={(props) => (<Layout {...props}/>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
