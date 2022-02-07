import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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
        </Switch>
        <Footer />
      </header>
    </div>
  );
}

export default App;
