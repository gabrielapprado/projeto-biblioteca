import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';
import Desenvolvedor from './pages/Desenvolvedor';
import AulaFundamentosReact from './pages/AulaFundamentosReact';
import AulaComponentesJSX from './pages/AulaComponentesJSX';
import AulaEstadosProps from './pages/AulaEstadosProps';
import AulaListasKeys from './pages/AulaListasKeys';
import AulaRenderizacaoCondicional from './pages/AulaRenderizacaoCondicional';
import Estudos from './pages/Estudos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/desenvolvedor" element={<Desenvolvedor />} />
        <Route path='/estudos' element={<Estudos />} />
      
      
        // Rotas das aulas
        <Route path="/aula/fundamentos" element={<AulaFundamentosReact />} />
        <Route path="/aula/componentes" element={<AulaComponentesJSX />} />
        <Route path="/aula/estados-props" element={<AulaEstadosProps />} />
        <Route path="/aula/listas-keys" element={<AulaListasKeys />} />
        <Route path="/aula/renderizacao-condicional" element={<AulaRenderizacaoCondicional />} />
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;