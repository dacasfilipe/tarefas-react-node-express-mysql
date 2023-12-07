// Componente do formulário de login
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const FormularioLogin = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validar os dados do formulário
      if (usuario.trim() === "" || senha.trim() === "") {
        alert("Preencha todos os campos!");
        return;
      }
  
      // Autenticar o usuário
      const autenticar = async () => {
        const response = await api.post("/login", {
          usuario,
          senha
        });
  
        if (response.status === 200) {
          // Usuário autenticado com sucesso
          setAutenticado(true);
        } else {
          // Falha na autenticação
          alert("Usuário ou senha inválidos!");
        }
      };
  
      autenticar();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    );
  };
  
  // Função para validar os dados do formulário
  function validarDadosFormulario(usuario, senha) {
    return usuario.trim() !== "" && senha.trim() !== "";
  }
  
  // Função para autenticar o usuário
  function autenticarUsuario(usuario, senha) {
    return api.post("/login", {
      usuario,
      senha
    });
  }

  export default FormularioLogin;