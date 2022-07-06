import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';

function App() {
  return (
    <div className='App'>
      <div className='to-do-list'>
        <h1>ToDo List</h1>
        <ListaDeTareas /> 
      </div>
     
    </div>
  );
}

export default App;
