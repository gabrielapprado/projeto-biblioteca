function Projetos(){
    return(
       <section className="bg-slate-100 p-6 rounded-xl mb-8 border-l-4 
       border-indigo-500
       shadow-sm
       transition
       duration-200
       hover:-translate-y-0.5
       hover:shadow-md">
            <h1 className="mb-4 text-2xl font-bold text-blue-900">
                Projetos
            </h1>

            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                CRUD API EXPRESS AND SQL
            </h2>

            <p className="text-slate-600 mb-3">
                API REST com operações de CRUD criar, ler, atualizar e deletar, desenvolvida com Node.js, Express e MySQL para manipulação de dados.
            </p>

            <a
                href="https://github.com/gabrielapprado/crud-api-express-mysql"
                className="text-indigo-600 font-medium hover:underline"
            >
                CRUD API EXPRESS AND SQL
            </a>

            <h2 className="text-xl font-semibold text-indigo-600 mt-8 mb-2">
                People Manager
            </h2>

            <p className="text-slate-600 mb-3">
                DOM Registration App, Sistema para gerenciamento de pessoas, com funcionalidades de cadastro, consulta e organização de dados.
            </p>

            <a
                href="https://github.com/gabrielapprado/People-Manager"
                className="text-indigo-600 font-medium hover:underline"
            >
                People Manager
            </a>
        </section>


    )
}
export default Projetos