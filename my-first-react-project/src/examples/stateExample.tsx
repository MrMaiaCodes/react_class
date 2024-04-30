import {useState} from "react";

export default function HomePage() {
    const [valorBotão, setValorBotão] = useState<number>(1);
    return(
        <div>
            "hi! This is my first code!"
            <p>{valorBotão}</p>
            <button onClick = {() => {setValorBotão(valorBotão + 1);}}> clickMe </button>
        </div>
    )
}