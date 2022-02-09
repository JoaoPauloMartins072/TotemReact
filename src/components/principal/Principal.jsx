import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Numeros from "../numeros/Numeros.jsx";

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './Principal.css'

toast.configure()

export default (props) => {
  
  const navigate = useNavigate();
  
  
  const [cpf, setNum] = useState('09084945646') //09084945646
  
  function clicou(cpfGerado) {
    
  setNum(previousValue => previousValue + cpfGerado) 

  console.log(cpf)

}

  function buscarFaturasDoCliente() {

      if(cpf === ''){
        
       toast.error('CPF/CNPJ está vazio')
          
       navigate('/')
        return
      }
  
      if(cpf.length < 10  ){
        toast.error('CPF/CNPJ não valido');
        navigate('/')
        setNum('')
       return 
      }

        navigate('/tela-boletos')
      

     
      
        
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
              <button className="botao-pesquisar" onClick={buscarFaturasDoCliente}>PESQUISAR</button>
            </td>
          </tr>
        </tbody>
      </table>
     
      
      <Numeros onClick={clicou} > 
      </Numeros>

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
