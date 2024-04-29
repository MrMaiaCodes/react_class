
/*
import { useState } from "react";

export default function HomePage() {
    //useState returns the variable in the diamond<> and the variable value in the parenthesis()
  const [valorBotao, setValorBotao] = useState<number>(1);
  //useState retorna a variavel que a gente quer e uma funcao para atualizar o valor da variavel (A funcao ta sendo utilizada na linha 11)
  // var valorDoBotao = 1;
    return(
        <div>
            "hi!  This is my first code!"
            <p>{valorBotao}</p>
            <button onClick={()=>  {setValorBotao(valorBotao+1);}}>     ClickME       </button> 
        </div>
    )
}
*/

import { useState } from "react";

export default function HomePage() {
    const [valorBotao, setValorBotao] = useState<number>(1);
    return(
        <div>
            "hi!  This is my first code!"
            <p>{valorBotao}</p>
            <button onClick={()=> {setValorBotao(valorBotao+1);}}> ClickME </button>
        </div>
    )
}