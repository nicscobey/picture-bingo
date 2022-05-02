import './contact.css'

const Contact = () => {
    return (
        <>
            <h1 id="contact">CONTACT</h1>
            <div className="contact-icons">
                <a className="contact-link brightness" href="mailto:nicscobey@gmail.com">
                    <img src={require('../imgs/mail_icon.png')} />
                    <p>Email</p>
                </a>
                <a href="https://github.com/nicscobey" target="_blank" className="contact-link invert">
                    <img src={require('../imgs/github_PNG40.png')} />
                    <p>GitHub</p>
                </a>
                {/* <a href="" className="contact-link brightness">
                    <img src={require('../imgs/document-icon-28.png')} />
                    <p>Resume</p>
                </a> */}
                <a href="https://www.linkedin.com/in/nicscobey/" target="_blank" className="contact-link invert">
                    <img src={require('../imgs/linkedin_logo.png')} />
                    <p>LinkedIn</p>
                </a>
            </div>
        </>
    )
}

export default Contact;