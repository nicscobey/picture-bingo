import './buttons.css'

export const PrimaryButton = ({text, space=40}) => {
    return (
        <button className="primary" style={{marginRight: space}}>
            {text}
        </button>
    )
}

export const SecondaryButton = ({text}) => {
    return (
        <button className="secondary">
            {text}
        </button>
    )
}