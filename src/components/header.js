import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h3>HEADER</h3></Link>
            <div className="nav">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
            </div>
        </div>   
    )
}

export default Header;