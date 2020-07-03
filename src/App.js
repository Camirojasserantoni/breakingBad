import React, {useEffect, useState} from 'react';
import axios from 'axios'; 

function Frase({frase}) { 
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
  <p>- {frase.author}</p>
    </div>
  )
}  

function App(){

  const [frase, getFrase] = useState({});

  console.log(frase);

  const consultarAPI = async () => { const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      //console.log(result.data[0]);
      //add the result of the api to the state; (similar a this.setState)
      getFrase(result.data[0]);





    }



  
  //consult to rest API always u use useeffect it is so similar to componentDidMount 

  useEffect( () =>{

    consultarAPI()
  }, []
  )
     //console.log(frase);//frase= this.state
    return( 
      <div className='contenedor'>
        <Frase 
        frase={frase} />
        <button onClick={consultarAPI}> Mostrar Nueva </button>
      </div>
  )
  

}
export default App;


