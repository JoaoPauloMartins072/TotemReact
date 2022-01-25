import React, { useState, useReducer } from "react";
import Numeros from "../numeros/Numeros.jsx";
import './Principal.css'

export default (props) => {
  
  const [cpf, setNum] = useState('09084945646')
  
  function clicou(cpfGerado) {
    
  setNum(previousValue => previousValue + cpfGerado) 

  console.log(cpf)

}

  function buscarFaturasDoCliente() {
    
  }


  return (

    <div className="teclado" >

      <div className="valor">

        <h1>Digite seu CPF ou CNPJ</h1>
        <p id="valor" maxLength="14" >{cpf}</p>

      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <button className="botao-pesquisar" onClick={() => {buscarFaturasDoCliente()}}>PESQUISAR</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Numeros onClick={clicou} > </Numeros>

      <table>
        <tbody>
          <tr>
            <td>
              <button className="botao-limpar" onClick={() => {setNum('')}}>LIMPAR</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )

}
