//import './App.css';
//import MenuSuperior from './components/MenuSuperior';
import cadastrar_tarefas from './components/cadastrar_tarefa';
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Routes>
        <Route path="/" element={<cadastrar_tarefas/>}/>
      </Routes>
    </>
  )
}
//Serão criados 2 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js
export default App;