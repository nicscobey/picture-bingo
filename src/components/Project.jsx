import './project.css'
import { PrimaryButton } from './Buttons';
import GitHubLogo from '../imgs/github_PNG40.png'
import Fade from 'react-reveal/Fade';
import OpenInNewWindow from '../imgs/open_in_new_window.png'
import YouTube from '../imgs/Exclude.png'

const Project = ({project, oddEven}) => {
    if (oddEven === "even") {
        return (
            <Fade bottom>
                <div className="project">
                    <div className="project-img">
                        <img className="mockup" src={project.image} />
                    </div>
                    <div className="project-description odd">
                        <h1>{project.name}</h1>
                        <h3>{project.description}</h3>
                        <p><i>Key Skills: {project.skills.join(", ")}</i></p>
                        <div className="project-buttons">
                            <a href={project.url} target="_blank">
                                <img className="new-window-link" src={OpenInNewWindow} alt="Open in New Window"/>
                            </a>
                            <a href={project.GitHub} target="_blank">
                                <img src={GitHubLogo} className="github-logo" alt="Open GitHub Repository" />
                            </a>
                            {project.YouTube ? 
                            <a href={project.YouTube} target="_blank">
                            <img src={YouTube} className="youtube-logo" alt="Open YouTube Demo" />
                            </a> : 
                            null
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
    else {
        return (
            <Fade bottom>
                <div className="project">
                    <div className="project-description even">
                        <h1>{project.name}</h1>
                        <h3>{project.description}</h3>
                        <i><p>Key Skills: {project.skills.join(", ")}</p></i>
                        <div className="project-buttons">
                            <a href={project.url} target="_blank">
                                <img className="new-window-link" src={OpenInNewWindow} alt="Open in New Window"/>
                            </a>
                            <a href={project.GitHub} target="_blank">
                                <img src={GitHubLogo} className="github-logo" alt="Open GitHub Repository" />
                            </a>
                            {project.YouTube ? 
                            <a href={project.YouTube} target="_blank">
                            <img src={YouTube} className="youtube-logo" alt="Open YouTube Demo" />
                            </a> : 
                            null
                            }
                            
                        </div>
                    </div>
                    <div className="project-img">
                    <img className="mockup" src={project.image} />
                    </div>
                </div>
            </Fade>
        )
    }
}

export default Project;