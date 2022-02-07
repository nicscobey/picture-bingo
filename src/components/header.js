import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1>HEADER</h1></Link>
            <div className="nav">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
            </div>
        </div>   
    )
}

export default Header;