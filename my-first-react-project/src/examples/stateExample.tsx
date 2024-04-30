/**
 * import { useState } from "react";

export default function HomePage() {
    const [valorBotao, setValorBotao] = useState<number>(1);
    return(
        <div>
            "hi!  This is my first code!"
            <p>{valorBotao}</p>
            <button onClick={()=> {setValorBotao(valorBotao+1);}}> ClickME </button>
        </div>
    )
 */
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