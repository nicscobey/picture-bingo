import './about.css'

const About = () => {
    return (
        <>
            <h1 id="about">ABOUT</h1>
            <div className="about-content">
                <div className="about-left">
                    <h3>
                    <div className="blue-text">Hey there &mdash; I'm Nic!</div>
                    </h3>
                    <h3>
                        I'm a software engineer, technical educator, and developer advocate with a master's degree in higher education. My technical expertise focuses on full-stack development with <div className="blue-text">JavaScript</div>, <div className="blue-text">React</div>, and <div className="blue-text">React Native</div>. 
                    </h3>
                    <h3>
                        In addition to my interest in creating applications that promote <div className="blue-text">justice</div> and <div className="blue-text">equity</div>, I seek to empower technical professionals to level up their skills and their career.
                    </h3>
                    <h3>
                        My non-technical areas of expertise include curriculum development, public speaking, program management, and process improvement.
                    </h3>
                </div>
                <div className="about-right">
                    <img className="about-photo" src={require('../imgs/Nic_hiking_pic.jpeg')} />
                </div>
            </div>
        </>
    )
}

export default About;