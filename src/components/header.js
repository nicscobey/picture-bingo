import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h3>HEADER</h3></Link>
            <div className="nav">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/skills" className="nav-link">Skills</Link>
                <Link to="/resume" className="nav-link">Resume</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>   
    )
}

export default Header;