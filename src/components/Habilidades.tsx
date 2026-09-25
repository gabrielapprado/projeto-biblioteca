function Habilidades(){
    return(
        <div className="bg-slate-100 p-6 rounded-xl mb-8 border-l-4 
        border-indigo-500 shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md">
            <div className="flex items-center gap-4 mb-5">
                <div className="bg-[#F5F7FA] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border">
                📖
                </div>

                <h1 className="mb-4 text-2xl font-bold text-blue-900">
                Habilidades
                </h1>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pacote Office Básico</li>
                <li>Lógica de Programação</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>Inglês Intermediário</li>
            </ul>
        </div>

    )

   
}
export default Habilidades