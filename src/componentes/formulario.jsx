import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';
function TareaFormulario(props) {

  const [input, setInput] = useState(''); //creamos el estado del input, que inicialmente no tiene ningún valor.

  const manejarCambio = e => {
    setInput(e.target.value); //esta funcioc captura todos los cambios del input y esto nos permite guardar el ultimo valor.

  }

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("Enviando formulario...");

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }
  return (
    <form 
      className="tarea-formulario"
      onClick ={manejarEnvio} //esto envía a tareaNueva el contenido del input.
    >
      
      <input
        className="tarea-input"
        type='text'
        placeholder='Escribe una nueva tarea'
        name= 'texto'
        onChange={manejarCambio} //cuando se escribe en el input se llama a la funcion manejarCambio.
      />
    </form>
      
    )
}

export default TareaFormulario;