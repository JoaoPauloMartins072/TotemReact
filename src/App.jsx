import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Principal from './components/principal/Principal'

import Footer from './components/footer/Footer';
import Numeros from './components/numeros/Numeros.jsx';
import TelaBoletos from './components/tela-boletos/TelaBoletos';
import autenticacao from "./autenticacao";


autenticacao()

export default function App() {

 

  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
            
            <Route element = { <Principal><Numeros/></Principal> } path="/" exact />
            
            <Route element = { <TelaBoletos/> } path="/tela-boletos" />           
          </Routes>
        </Router>
      <Footer />
    </div>
  )
}