import React, {useState} from "react";
import TareaFormulario from "./formulario";
import Tarea from './ToDos.jsx';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas () {

  const [tareas, setTareas] = useState([]); //estado inicial sin tareas, por eso el array vacío. Este array almacenara objetos de cada tarea que contiene la lista.

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } 
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        <h5>LISTA DE TAREAS</h5>
        {
          tareas.map((tarea) => 
            <Tarea 
              texto = {tarea.texto}
              completada = {tarea.completada}
            />
          )
        }
      </div>
    </>
  );
};

export default ListaDeTareas;