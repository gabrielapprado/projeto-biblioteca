import { Link } from "react-router-dom"
import Formacao from "../components/Formacao"
import Habilidades from "../components/Habilidades"
import Projetos from "../components/Projetos"
import Quemsou from "../components/Quemsou"


function Desenvolvedor(){
    return(
        <>
            <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white 
                                    text-sm font-medium mb-5 transition-colors duration-200"
                        >
                        <span className="text-lg">←</span>
                        Voltar
                    </Link>
                    
                    <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
                    <div>
                    <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight"> Gabriela Prado</h1>
                    <p className="text-[#94A3B8] text-sm mt-1 m-0">Um pouco sobre mim...</p>
                    </div>

                    </div>
                
                </header>
            <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
                
                <Quemsou />
                <Formacao />
                <Habilidades />
                <Projetos />
                
            </main>
        </>
    )
}
export default Desenvolvedor