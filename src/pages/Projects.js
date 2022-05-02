import "./projects.css"
import Project from "../components/Project";
import projects from "../components/projects";

const Projects = () => {
    const mapProjects = projects.map((project, index) => {
        return <Project project={project} oddEven={index % 2 === 0 ? "even" : "odd"} />
    })

    return (
        <>
            <h1 id="projects">PROJECTS</h1>
            {mapProjects}
        </>
    )
}

export default Projects;