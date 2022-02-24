import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Numeros from "../numeros/Numeros.jsx";
import './Principal.css'
import { ObterFaturas } from '../../components/Autenticacao'
import { FaturasContext } from "../../providers/faturas.js";
import toast, { Toaster } from 'react-hot-toast';

export default function Principal(props) {

  const navigate = useNavigate();
  const [cpf, setNum] = useState('12581531657') //09084945646 , 12581531657, 09823056641
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
    if (boletos.length === 0) {
      toast.success('Não há faturas, tudo em dia!');
      navigate('/')
      setNum('')
      return
    }
    faturas.setFatura(boletos)
    navigate('/tela-boletos')
    toast.success('Olá escolha seu boleto clicando neles !')

  }

  return (

    <div className="teclado" >
      <Toaster
          containerStyle={{
            position: 'relative',
            left: 350,
            top: 0,
           
          }}
      />
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
