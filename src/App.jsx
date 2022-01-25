import './App.css'

import Header from './components/header/Header';
import Principal from './components/principal/Principal'

import Footer from './components/footer/Footer';
import Numeros from './components/numeros/Numeros.jsx';



export default function App() {

 

  return (
    <div className="App">
      <Header />
      <Principal>
        <Numeros/>
      </Principal>
      <Footer />
    </div>
  )
}