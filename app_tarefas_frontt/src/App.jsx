import Cadastrar_Tarefas from './components/cadastrar_tarefa';
import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_tarefas';
import FormularioLogin from './components/login';

import { useState } from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //autenticação
  const [autenticado, setAutenticado] = useState(false);
  if (autenticado){
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
  );
  } else{
    // Usuário não autenticado
    return (
      <>
        <FormularioLogin/>
      </>
    );
  }

};
export default App;