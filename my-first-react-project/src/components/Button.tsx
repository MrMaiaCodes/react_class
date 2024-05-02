interface ButtonTemplateProps{
    textColor: string;
    text: string;
    onClickButton: ()=> void;
}
export const Button = (props: ButtonTemplateProps) => {
    const {text} = props;
    return (
        <button style = {{
            color: props.textColor,
            background: "white",
            height: "40px",
            width: "100px",
            borderRadius: "20px",
            margin: "8px"
        }}>
        {text}
        </button>
    )
}