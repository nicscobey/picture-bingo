import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* <Footer /> */}
      {/* </Header> */}
    </div>
  );
}

export default App;
