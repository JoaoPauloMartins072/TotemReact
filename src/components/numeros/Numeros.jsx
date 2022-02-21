import './Numeros.css'



export default function Numeros (props) {
   
    
    function inserirNumero(numero) {
        
        props.onClick(numero) 
       
        
    }
    
    return (
        
        <table id="numeros" className="teclado-numeros"> 
        <tbody>
            <tr>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('1')}}>1</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('2')}}>2</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('3')}}>3</button></td>
            </tr>
            
            <tr>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('4')}}>4</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('5')}}>5</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('6')}}>6</button></td>
            </tr>
            
            <tr>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('7')}}>7</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('8')}}>8</button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('9')}}>9</button></td>
            </tr>
            
            <tr>
                <td><button className="botao-block" ></button></td>
                <td><button className="botao-numeros" onClick={() => {inserirNumero('0')}}>0</button></td>
                <td><button className="botao-block" ></button></td>
            </tr> 
        </tbody>              
        </table>  
    )
}
