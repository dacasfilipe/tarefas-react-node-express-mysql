import { useState } from "react";
import { useAuth } from './AuthProvider'; // Ajuste o caminho conforme necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "../config_axios";

const FormularioLogin = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (usuario.trim() === "" || senha.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }
    
        try {
            const response = await api.post("/login", { usuario, senha });
            if (response.status === 200) {
                login();
            } else {
                alert("Usuário ou senha inválidos!");
            }
        } catch (error) {
            alert("Erro ao tentar logar. Tente novamente mais tarde.");
        }
    };
    
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">   
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <input type="text" id="user" className="form-control form-control-lg" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                                <label className="form-label" htmlFor="user">Usuário</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" id="senha" className="form-control form-control-lg" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                <label className="form-label" htmlFor="senha">Senha</label>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label" htmlFor="form1Example3"> Lembre-me</label>
                                </div>
                                <a href="#!">Esqueceu a senha?</a>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                            
                            {/* Botões de mídia social */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormularioLogin;