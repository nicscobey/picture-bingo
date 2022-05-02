import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <a href="#home">
                <img id="logo" src={require('../imgs/NS Logo 2@4x.png')} />
            </a>
            <div className="nav">
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#resume" className="nav-link">Resume</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </div>   
    )
}

export default Header;