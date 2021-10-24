import './App.css';
import Navbar from './components/Navbar';
import Starter from './components/Starter';
import Content from './components/Content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
import Data from './components/Data';
import Login from './components/Login';
import Author from './components/Author';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/author">
              <Navbar/>
              <Author/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Navbar/>
              <Starter/>
              <Main/>
              <Content/>
              <Footer/>
            </Route>
        </Switch>
        <Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
