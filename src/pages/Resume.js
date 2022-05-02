import './resume.css'
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const Resume = () => {
    return (
        <>
        <h1 id="resume">RESUME</h1>
        <div className="resume-section">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTk1Gh-askspcEdFQrC6bD7hPn3fgJHcd8acAd3ADl364aGdMskkW7QAQFdlvnfsA/pub?embedded=true"></iframe>
            <a href="https://drive.google.com/file/d/15yYCde2zrdW2WEYnCpzoU4PUu2m8_cNv/view?usp=sharing" target="_blank">
                <PrimaryButton text={"View as PDF"} space={0}/>
            </a>
        </div>
        </>

    )
}

export default Resume;