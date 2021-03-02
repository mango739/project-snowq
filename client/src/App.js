import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import SchoolList from "./components/School/SchoolList"
import CreateSchool from "./components/Dashboard/CreateSchool";
import UpdateSchool from "./components/Dashboard/UpdateSchool";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/school" component={SchoolList} />
        <Route path="/create-school" component={CreateSchool} />
        <Route path="/update/:id" component={UpdateSchool} />
      </Router>
    </div>
  );
}

export default App;
