const Button = ({color, text, onClick}) => {
    return (
        <button
            style={{ backgroundColor: color}} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
