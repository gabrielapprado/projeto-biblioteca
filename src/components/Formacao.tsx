function Formacao(){
    return(
        <section className="bg-slate-100 p-6 rounded-xl mb-8 
        border-l-4 border-indigo-500
        shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md">
            <h1 className="mb-4 text-2xl font-bold text-blue-900">
                Formação
            </h1>

            <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ensino Médio Completo</li>
                <li>Cursando Desenvolvimento de Software e Multiplataforma - FATEC</li>
            </ul>
        </section>

    )
}
export default Formacao