import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Principal from './components/principal/Principal';
import Numeros from './components/numeros/Numeros.jsx';
import TelaBoletos from './components/tela-boletos/TelaBoletos';
import Footer from './components/footer/Footer';

import { useContext, useEffect } from 'react';
import { autenticacao } from './components/Autenticacao';
import { FaturasContext } from "./providers/faturas";


export default function App() {

  useEffect(() => {autenticacao()},[]);
  const {faturas} = useContext(FaturasContext)

  return (
    <div className="App">
     
      <Header />
      <Router>
          <Routes>            
            <Route element = { <Principal><Numeros/></Principal> } path="/" exact />
            <Route element = { faturas ? <TelaBoletos/> : <Principal><Numeros/></Principal> } path="/tela-boletos" />           
          </Routes>
        </Router>
      <Footer />
      
    </div>
  )
}