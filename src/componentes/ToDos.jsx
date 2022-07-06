import React from "react";
import '../hojas-de-estilo/tareas.css';
import { FcDeleteRow } from "react-icons/fc";

function TodoList ({ id, texto, completada, completarTarea, eliminarTarea }) {
  
  return (
    <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
      lista de tareas
      <div 
        className="texto-tarea"
        onClik={() => completarTarea(id)} //al hacer click sobre el elemento div de la tarea, se ejecuta la funcion completarTarea sobre ese div en particular, identificado con su id.
      >
        {texto}
      </div>
      <div 
        className="contenedor-iconos"
        onclick={() => eliminarTarea(id)} // cuando se haga click sobre el div contenedor del icono eliminar, ejecutará la función solo sobre el div que contiene el id especificado como parámetro en la función
        >
        <FcDeleteRow className="icono-tarea"/>
      </div>
    </div>
  );
};

export default TodoList;