import Cadastrar_Tarefas from './components/cadastrar_tarefa';
import Menu_Superior from './components/MenuSuperior';
import Manutencao_Tarefas from './components/manutencao_tarefas';
import FormularioLogin from './components/login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider'; // Ajuste o caminho conforme necessário

// Componente para rota protegida
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { autenticado } = useAuth();

    return autenticado ? children : <Navigate to="/login" />;
};

const RoutesWithAuth = () => {
    const { autenticado } = useAuth();

    return (
        
            <Router>
                {autenticado && <Menu_Superior />}
                <Routes>
                    <Route path="/login" element={<FormularioLogin />} />
                    <Route 
                        path="/" 
                        element={
                            <ProtectedRoute>
                                <Cadastrar_Tarefas />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/manutencao" 
                        element={
                            <ProtectedRoute>
                                <Manutencao_Tarefas />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </Router>
        
    );
};
const App = () => {
    
   
  return (
          <>
            <AuthProvider>
              <RoutesWithAuth/>
          </AuthProvider>
          </>
      );
  };
  
  export default App;