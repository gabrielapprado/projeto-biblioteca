import Contato from "./components/Contato"
import Formacao from "./components/Formacao"
import Foto from "./components/Foto"
import Habilidades from "./components/Habilidades"
import Projetos from "./components/Projetos"
import Quemsou from "./components/Quemsou"
import SobreMim from "./components/SobreMim"

function AppSobre(){
    return(
    <div>
       <SobreMim />
       <Quemsou />
       <Formacao />
       <Habilidades />
       <Projetos />
       <Contato />
       <Foto />
    </div>
       
    )
}
export default AppSobre