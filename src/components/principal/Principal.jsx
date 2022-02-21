import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Numeros from "../numeros/Numeros.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Principal.css'
import  { ObterFaturas }  from '../../components/Autenticacao'
import { FaturasContext } from "../../providers/faturas.js";



toast.configure()
export default function Principal(props) {


  const navigate = useNavigate();
  const [cpf, setNum] = useState('12581531657') //09084945646 , 12581531657
  const faturas = useContext(FaturasContext)


  function clicou(cpfGerado) {
    setNum(previousValue => previousValue + cpfGerado)

  }
  async function buscarFaturasDoCliente() {
    if (cpf === '') {
      toast.error('CPF/CNPJ está vazio')
      navigate('/')
      return
    } else if (cpf.length < 10) {
      toast.error('CPF/CNPJ não valido');
      navigate('/')
      setNum('')
      return
    }
    toast.success('Buscando suas Faturas')
    const boletos = await ObterFaturas(cpf)
    faturas.setFatura(boletos)
    navigate('/tela-boletos', )
    
    //console.log(boletos)
    // console.log(boletos[boletos.length-1])
    // console.log(boletos[0].id_fatura)
    // console.log(boletos[0].data_vencimento)
    // console.log(boletos[0].valor)
    // try {

    //   if (0 === 0) {
    //     toast.success('Não há debitos, tudo em dia')
    //   } else {
    //     console.log()
    //   }
    //   toast.success('Bem Vindo ao Totem da Sempre');
    //   navigate('/tela-boletos')
    //   setNum('')

    // } catch (error) {
    //   toast.error(error.message)

    // }



  }




  return (
    <div className="teclado" >
      <div className="valor">
        <h1>Digite seu CPF ou CNPJ</h1>
        <p id="valor" maxLength="14">{cpf}</p>
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
              <button className="botao-limpar" onClick={() => { setNum('') }}>LIMPAR</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )

}
