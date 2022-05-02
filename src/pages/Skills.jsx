import './skills.css'
import Marquee from "react-fast-marquee";

const Skills = () => (
        <div id="skills-section">
            
            <h1  id="skills" >SKILLS</h1>
            <Marquee id="marquee" gradient={false} speed={35}>
                <div>
                    <i class="devicon-javascript-plain"></i>
                    <p className="skill-label">JavaScript</p>
                </div>
                <div>
                    <i class="devicon-java-plain"></i>
                    <p className="skill-label">Java</p>
                </div>
                <div>
                    <i class="devicon-react-original"></i>
                    <p className="skill-label">React</p>
                </div>
                <div>
                    <i class="devicon-python-plain"></i>
                    <p className="skill-label">Python</p>
                </div>
                <div>
                    <i class="devicon-materialui-plain"></i>
                    <p className="skill-label">Material UI</p>
                </div>
                <div>
                    <i class="devicon-git-plain"></i>
                    <p className="skill-label">Git</p>
                </div>
                <div>
                    <i class="devicon-nodejs-plain"></i>
                    <p className="skill-label">NodeJS</p>
                </div>
                <div>
                    <i class="devicon-figma-plain"></i>
                    <p className="skill-label">Figma</p>
                </div>
                <div>
                    <i class="devicon-photoshop-plain"></i>
                    <p className="skill-label">Photoshop</p>
                </div>
                <div>
                    <i class="devicon-gimp-plain"></i>
                    <p className="skill-label">Gimp</p>
                </div>
                <div>
                    <i class="devicon-html5-plain"></i>
                    <p className="skill-label">HTML</p>
                </div>
                <div>
                    <i class="devicon-jquery-plain"></i>
                    <p className="skill-label">jQuery</p>
                </div>
                <div>
                    <i class="devicon-ruby-plain"></i>
                    <p className="skill-label">Ruby</p>
                </div>
                <div>
                    <i class="devicon-rails-plain"></i>
                    <p className="skill-label">Rails</p>
                </div>
                <div>
                    <i class="devicon-illustrator-plain"></i>
                    <p className="skill-label">Adobe Illustrator</p>
                </div>
                <div>
                    <i class="devicon-bootstrap-plain"></i>
                    <p className="skill-label">Bootstrap</p>
                </div>
                <div>
                    <i class="devicon-github-original"></i>
                    <p className="skill-label">GitHub</p>
                </div>
                <div>
                    <i class="devicon-bulma-plain"></i>
                    <p className="skill-label">Bulma</p>
                </div>
                <div>
                    <i class="devicon-postgresql-plain"></i>
                    <p className="skill-label">PostgreSQL</p>
                </div>
                <div>
                    <i class="devicon-mongodb-plain"></i>
                    <p className="skill-label">MongoDB</p>
                </div>
                <div>
                    <i class="devicon-express-original"></i>
                    <p className="skill-label">Express</p>
                </div>
                <div>
                    <i class="devicon-django-plain"></i>
                    <p className="skill-label">Django</p>
                </div>
                <div>
                    <i class="devicon-css3-plain"></i>
                    <p className="skill-label">CSS</p>
                </div>
                <div>
                    <i class="devicon-gitlab-plain"></i>
                    <p className="skill-label">GitLab</p>
                </div>
                <div>
                    <i class="devicon-premierepro-plain"></i>
                    <p className="skill-label">Adobe Premiere</p>
                </div>
                <div>
                    <i class="devicon-jira-plain"></i>
                    <p className="skill-label">Jira</p>
                </div>
                <div>
                    <i class="devicon-heroku-original"></i>
                    <p className="skill-label">Heroku</p>
                </div>
            </Marquee>
        </div>
)

export default Skills;