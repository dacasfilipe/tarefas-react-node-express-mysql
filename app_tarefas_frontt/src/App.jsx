import Cadastrar_Tarefas from './components/cadastrar_tarefa';
import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_tarefas';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Router>
        <Menu_Superior/>
      <Routes>
        <Route exact path="/" Component={Cadastrar_Tarefas}/>
        <Route exact path="/manutencao" Component={Manutencao_Tarefas}/>
                
      </Routes>
      </Router>
    </>
  )
}

export default App;