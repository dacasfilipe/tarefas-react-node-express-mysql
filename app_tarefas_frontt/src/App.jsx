import Cadastrar_Tarefas from './components/cadastrar_tarefa';
import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_tarefas';
import FormularioLogin from './components/login';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './components/AuthProvider'; // Caminho para o AuthProvider

const App = () => {
    return (
      <>
      <AuthProvider>
  
      <Router>
        <Menu_Superior/>
      <Routes>
        <Route path="/" element={<Cadastrar_Tarefas />}/>
        <Route path="/manutencao" element={<Manutencao_Tarefas />}/>
        <Route path="/login" element={<FormularioLogin />}/>       
      </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}        

export default App;