//import './App.css';
//import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import {Routes,Route} from 'react-router-dom';
//import ManutencaoLivros from './components/ManutencaoLivros';
//import ResumoLivros from './components/ResumoLivros';
const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Routes>
        <Route path="/" element={<InclusaoLivros/>}/>
        
      </Routes>
    </>
  )
}
//Serão criados 2 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js
export default App;