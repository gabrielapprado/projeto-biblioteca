import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Aulas from "./pages/Aulas"
import Recomendacao from "./pages/Recomendacao"
import Estudos from "./pages/Estudos"
import Acervo from "./pages/Acervo"
import Desenvolvedor from "./pages/Desenvolvedor"
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aulas" element={<Aulas />} />
      <Route path="/recomendacao" element={<Recomendacao/>} />
      <Route path="/estudos" element={<Estudos/>} />
      <Route path="/acervo" element={<Acervo/>} />
      <Route path="/desenvolvedor" element={<Desenvolvedor/>}/>

    </Routes>
  
  </BrowserRouter>
  )
  
}
export default App