import './App.css';
import Home from './Home';
import About from './About'
import Service from './Service'
import Contact from './Contact'
import './style.css'
import CardDesc from './CardDesc';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">

              <Link to="/" className="navbar-brand text-info">OnTeach</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" activeClassName='menu_active' className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" activeClassName='menu_active' className="nav-link active" >About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/service" activeClassName='menu_active' className="nav-link active" >Services</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" activeClassName='menu_active' className="nav-link active">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>


        <Switch>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/service"><Service /></Route>
          <Route exact path="/carddesc"><CardDesc></CardDesc></Route>
          <Redirect to="/" />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
