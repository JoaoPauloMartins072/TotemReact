import React, { useState } from "react";
import Numeros from "../numeros/Numeros.jsx";
import './Principal.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



export default (props) => {
  
  const [cpf, setNum] = useState('') //09084945646
  
  function clicou(cpfGerado) {
    
  setNum(previousValue => previousValue + cpfGerado) 

  console.log(cpf)

}

  function buscarFaturasDoCliente() {
  
    
      if(cpf === ''){
       toast.error('CPF/CNPJ está vazio')
        
      }
  
      if(cpf.length < 10  ){
        toast.error('CPF/CNPJ não valido');
        
      }
    //   try {
    //     const resultado =  this.hubsoftService.obterFaturas(this.cpf_cnpj)
    //     if(resultado.faturas.length === 0){
    //      this.toast.success('Tudo em dia')
 
    //     }else{
    //       console.log(resultado.faturas)
    //       this.toast.success('Cpf Valido','Bem Vindo!')
    //       this.router.navigateByUrl('/boletos', { state: resultado.faturas } )
    //     }
 
 
 
    //  } catch (error) {
    //    console.log(error)
    //    this.toast.error(error.error.msg)
    //  }
  
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
      
      <ToastContainer />
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
