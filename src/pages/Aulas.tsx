
type Aula={
    id:number;
    numero:string;
    titulo:string;
    descricao:string;
}

const aulas: Aula[] = [
    {
    id:1,
    numero:"01",
    titulo:"Fundamentos do React",
    descricao:"Esta aula apresenta os conceitos básicos do React"
    },
    
    {
    id:2,
    numero:"02",
    titulo:"Componente e JSX",
    descricao:"Aprenda a criar componentes em React e usar JSX"
    },
    {
    id:3,
    numero:"03",
    titulo:"Estados e Props",
    descricao:"Aprenda a gerenciar estados e props em componentes do React"
    },
    {
    id:4,
    numero:"04",
    titulo:"Renderização Condicional",
    descricao:"Esta aula ensina como realizar renderização condicional em React"
    },
    {
    id:5,
    numero:"05",
    titulo:"Listas e Keys",
    descricao:"Esta aula ensina listas e keys no React"
    },
    {
    id:6,
    numero:"06",
    titulo:"Lifting State",
    descricao:"Esta aula ensina como usar Listing State"
    },
    {
    id:7,
    numero:"07",
    titulo:"Hooks",
    descricao:"Esta aula ensina a como utilizar Hooks"
    },
    {
    id:8,
    numero:"08",
    titulo:"Virtual Dom e Reconcilation",
    descricao:"Esta aula ensina Virtual DOM no React"
    },
    {
    id:9,
    numero:"09",
    titulo:"Layout e Estilização",
    descricao:"Esta aula ensina sobre Layout e Estilização no React"
    },
    {
    id:10,
    numero:"10",
    titulo:"Autenticação",
    descricao:"Esta aula ensina como implementar autenticação"
    },
    
]

type AulaItemProps={
    aula:Aula;
}

function AulaItem({ aula }: AulaItemProps) {
    return (
    <article
      className="
        flex
        items-center
        w-full
        p-4
        bg-white
        rounded-xl
        shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

    <div
        className="
          flex
          items-center
          justify-center
          w-12
          h-12
          min-w-12
          rounded-full
          bg-blue-600
          mr-4
        "
      >

      <span
          className="
            text-white
            text-sm
            font-bold
          "
        >
          {aula.numero}
        </span>

      </div>
<div className="flex-1">

        <h2
          className="
            text-[17px]
            font-bold
            text-slate-800
            mb-1
          "
        >
          {aula.titulo}
        </h2>


        <p
          className="
            text-[13px]
            leading-[18px]
            text-slate-500
          "
        >
          {aula.descricao}
        </p>

      </div>

    </article>
  );
}

export default function Aulas() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-100
      "
    >

    <header
        className="
          bg-slate-800
          px-5
          pt-14
          pb-8
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Aulas Mobile
        </h1>

        <p
          className="
            mt-2
            text-sm
            leading-5
            text-slate-300
          "
        >
          Aprenda desenvolvimento mobile passo a passo
        </p>

      </header>
 <section
        className="
          w-full
          max-w-4xl
          mx-auto
          px-5
          py-8
        "
      >

       <h2
          className="
            mb-4
            text-[21px]
            font-bold
            text-slate-800
          "
        >
          Lista de aulas
        </h2>

        <div
          className="
            flex
            flex-col
            gap-3
          "
        >

          {aulas.map((aula) => (

            <AulaItem
              key={aula.id}
              aula={aula}
            />

          ))}

        </div>

      </section>

    </main>
  );
}