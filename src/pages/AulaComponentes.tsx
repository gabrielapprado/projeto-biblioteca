import CardLivros from "../components/CardLivros"
import Header from "../components/Header"
import img1984 from "./assets/img1984.jpg"
import imgMachado from "./assets/imgMachado.jpg"
import imgClarice from "./assets/imgClarice.webp"

function App(){
  return(
    <div className="min-h-screen bg-gray-400">
      <Header />
      <CardLivros titulo="1984" autor="George Orwell" categoria="Ficção Científica" imagem={img1984}/>
      
      <CardLivros titulo="Memórias Póstumas de Brás Cubas" autor="Machado de Assis" categoria="Realismo" imagem={imgMachado}/>
      <CardLivros titulo="Quincas Borba" autor="Machado de Assis" categoria="Realismo" imagem={imgMachado} />
      <CardLivros titulo="A Hora da Estrela" autor="Clarice Lispector" categoria="Romance Intimista" imagem={imgClarice} /> 
  
    </div>
  )
}
export default App