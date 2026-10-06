import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Estudos(){

    const [segundos, setSegundos] = useState(1500)
    const [active, setActive] = useState(false)
    const [descanso, setDescanso] = useState(false)
    const [pause, setPause] = useState(false)

    useEffect(() => {
    if (active && !pause) {
        const intervalo = setInterval(() => {
            setSegundos((segundos) => {


                if (segundos === 1) {

                    if (descanso) {
                        setDescanso(false)
                        return 1500
                    } else {
                        setDescanso(true)
                        return 300
                    }

                }

                return segundos - 1
            })
        }, 1000)

        return () => clearInterval(intervalo)
    }
}, [active,pause, descanso])

    return(
       <div>
            <header
        className="
          bg-slate-800
          px-5
          pt-14
          pb-8
        "
      >
         <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white 
                            text-sm font-medium mb-5 transition-colors duration-200"
                >
                <span className="text-lg">←</span>
                Voltar
        </Link>

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Cantinho dos Estudos
        </h1>

        <p
          className="
            mt-2
            text-sm
            leading-5
            text-slate-300
          "
        >
          Um espaço para você organizar seus momentos de estudo e manter o foco. Use o Pomodoro para dividir seu tempo entre períodos de concentração e pequenas pausas, tornando seus estudos mais leves e produtivos.
        </p>

      </header>
      <section className="w-full py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Pomodoro
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Organize seu tempo de estudo e mantenha o foco.
            Estude por períodos de concentração e aproveite pequenas pausas
            para descansar.
        </p>

        <div className={`${descanso ? "bg-blue-500" : "bg-green-600"} rounded-3xl p-10 max-w-md mx-auto shadow-lg`}>

            <h3 className="text-white text-lg font-medium mb-6">
                {descanso ? "Tempo de Descanso" : "Tempo de Estudos"}
            </h3>

            <div className="text-white text-7xl font-bold tracking-wider mb-8">
                {Math.floor(segundos/60)}:{String(segundos % 60).padStart(2, "0")}
            </div>
            {active && !pause ? (
                <button
                    className={`
                        ${descanso ? "text-blue-500 hover:bg-blue-50" : "text-green-700 hover:bg-green-50"}
                        bg-white
                        font-semibold
                        px-8 py-3
                        rounded-full
                        cursor-pointer
                        transition duration-200
                        shadow-md
                    `}
                    onClick={() => setPause(true)}
                >
                    Pausar
                </button>
                ) : (
                <button
                    className={`
                        ${descanso ? "text-blue-500 hover:bg-blue-50" : "text-green-700 hover:bg-green-50"}
                        bg-white
                        font-semibold
                        px-8 py-3
                        rounded-full
                        cursor-pointer
                        transition duration-200
                        shadow-md
                    `}
                    onClick={() => {
                        setActive(true)
                        setPause(false)
                    }}
                >
                    Iniciar
                </button>
            )}
           
        </div>

    </div>
</section>

       </div>
    )
}

export default Estudos