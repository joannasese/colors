import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import NavBar from '../components/NavBar';
import LittleJoy from '../components/LittleJoy';
import ColorBox from '../components/ColorBox';
import Home from '../components/Home';

// const navBar = (
//   <Router>
//   <div>
//   <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="/">Home</a>
//       </Navbar.Brand>
//     </Navbar.Header>
//     <Nav>
//       <NavItem eventKey={1} href="little-joy">ColorBox</NavItem>
//       <Route exact path="/little-joy" component={LittleJoy} />
//     </Nav>
//   </Navbar>
//   </div>
//   </Router>
// )
// class App extends Component {
//   render(){
//     return (NavBar()
//
//
//       // <div>
//       //   <Navbar inverse fixedTop>
//       //     <Grid>
//       //       <Navbar.Header>
//       //         <Navbar.Brand>
//       //           <a href="/">React App</a>
//       //         </Navbar.Brand>
//       //         <Navbar.Brand>
//       //           <a href="/little-joy">Random Joy</a>
//       //         </Navbar.Brand>
//       //         <Navbar.Toggle />
//       //       </Navbar.Header>
//       //     </Grid>
//       //   </Navbar>
//       //   <Jumbotron>
//       //     <Grid>
//       //       <h1>Welcome to React</h1>
//       //       <p>
//       //         <Button
//       //           bsStyle="default"
//       //           bsSize="large"
//       //           href="http://react-bootstrap.github.io/components.html"
//       //           target="_blank">
//       //           View React Bootstrap Docs
//       //         </Button>
//       //       </p>
//       //     </Grid>
//       //   </Jumbotron>
//       // </div>
//     )
//   }
// }

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/little-joy" component={LittleJoy} />
        <Route exact path="/color-box" component={ColorBox} />
      </div>
    </Router>
  );
};

export default App;
