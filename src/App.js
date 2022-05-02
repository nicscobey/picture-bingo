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
        <div className="pages">
          <Home />
          <Skills/>
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
        {/* <Footer /> */}
      {/* </Header> */}
    </div>
  );
}

export default App;
