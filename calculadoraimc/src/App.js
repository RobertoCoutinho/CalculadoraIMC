import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [resultado, setResultado] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  //tabela usada do site https://www.tuasaude.com/imc/
  const calculaIMC = () => {
    const res = peso / (altura * altura)
    if(res < 18.5){
      setResultado('Magreza')
    }
    else if(res >= 18.5 && res <= 24.9){
      setResultado('Peso normal')
    }
    else if(res >= 25 && res <= 29.9){
      setResultado('Sobrepeso')
    }
    else if(res >= 30 && res <= 34.9){
      setResultado('Obesidade grau 1')
    }
    else if(res >= 35 && res <= 40){
      setResultado('Obesodade grau 2')
    }
    else if(res > 40){
      setResultado('obesidade grau 3')
    }
  }

  return (
   <>
    <div className='conteudo'>
      <h2>Calculadora de IMC</h2>
      <label>Digite sua altura</label>
      <input 
        type = "text"
        name = "altura"
        value = {altura}
        onChange = {(e)=>setAltura(e.target.value)} 
        placeholder="ex.: 1.60"/>
         <label>Digite seu peso</label>
      <input 
        type = "text" 
        name = "peso" 
        value = {peso}
        onChange={(e)=>setPeso(e.target.value)} 
        placeholder = "ex.: 65.5"/>
      <button onClick={()=>calculaIMC()}>Calcular</button>
      <center><h3>{resultado}</h3></center>
    </div>
   </>
  );
}

export default App;
