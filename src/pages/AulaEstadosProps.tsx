import  { useState } from "react";

export default function AulaEstadosProps() {
  const [nome, setNome] = useState("Maria");
  const [contador, setContador] = useState(0);

  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [resultado, setResultado] = useState(false);

  const gabarito = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "B",
  };

  const responder = (q: string, r: string) => {
    setRespostas((atual) => ({
      ...atual,
      [q]: r,
    }));

    setResultado(false);
  };

  const pontuacao = () =>
    Object.keys(gabarito).filter(
      (q) =>
        respostas[q] ===
        gabarito[q as keyof typeof gabarito]
    ).length;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <header className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-lg">
          <span className="text-sm font-bold uppercase">
            Aula 03
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Estados e Props
          </h1>

          <p className="mt-3 text-emerald-100">
            Aprenda a passar informações para componentes e
            controlar dados que mudam durante a execução.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            1. O que são Props?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Props são informações enviadas de um componente para
            outro.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`function Usuario({ nome }) {
  return <h2>{nome}</h2>;
}

<Usuario nome="Maria" />`}
          </pre>

          <Usuario nome="Maria" />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            2. Props tornam componentes reutilizáveis
          </h2>

          <p className="mt-4 text-slate-600">
            O mesmo componente pode receber valores diferentes.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Usuario nome="Maria" />
            <Usuario nome="João" />
            <Usuario nome="Carlos" />
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            3. O que é State?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            State representa informações que pertencem ao
            componente e podem mudar durante a execução.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`const [contador, setContador] = useState(0);`}
          </pre>

          <p className="mt-4 text-slate-600">
            O primeiro valor representa o estado atual e a
            segunda variável é utilizada para alterá-lo.
          </p>

          <div className="mt-5 rounded-xl bg-emerald-50 p-6 text-center">
            <p className="text-4xl font-bold text-emerald-700">
              {contador}
            </p>

            <button
              onClick={() => setContador(contador + 1)}
              className="mt-4 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Incrementar
            </button>

            <button
              onClick={() => setContador(0)}
              className="ml-2 rounded-lg bg-slate-600 px-6 py-3 font-bold text-white"
            >
              Zerar
            </button>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            4. Estado pode alterar a interface
          </h2>

          <p className="mt-4 text-slate-600">
            Quando o estado muda, o React atualiza a interface
            para refletir o novo valor.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-5">
            <p className="font-bold text-slate-700">
              Nome atual:
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {nome}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setNome("Maria")}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white"
              >
                Maria
              </button>

              <button
                onClick={() => setNome("João")}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                João
              </button>

              <button
                onClick={() => setNome("Carlos")}
                className="rounded-lg bg-purple-600 px-4 py-2 text-white"
              >
                Carlos
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            5. Diferença entre Props e State
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="text-xl font-bold text-blue-700">
                Props
              </h3>

              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• São recebidas pelo componente.</li>
                <li>• Vêm de outro componente.</li>
                <li>• Podem personalizar componentes.</li>
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-50 p-5">
              <h3 className="text-xl font-bold text-emerald-700">
                State
              </h3>

              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Pertence ao componente.</li>
                <li>• Pode mudar durante a execução.</li>
                <li>• Atualiza a interface.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Questionário
          </h2>

          <Question
            n="1"
            text="Para que servem Props?"
            options={{
              A: "Para enviar informações para componentes.",
              B: "Para criar bancos de dados.",
              C: "Para instalar React.",
            }}
            answer={respostas.q1}
            onAnswer={(r) => responder("q1", r)}
          />

          <Question
            n="2"
            text="Qual Hook é utilizado para criar estado?"
            options={{
              A: "useProps",
              B: "useState",
              C: "useComponent",
            }}
            answer={respostas.q2}
            onAnswer={(r) => responder("q2", r)}
          />

          <Question
            n="3"
            text="O que acontece quando o state é atualizado?"
            options={{
              A: "O navegador fecha.",
              B: "O componente é apagado.",
              C: "A interface pode ser atualizada.",
            }}
            answer={respostas.q3}
            onAnswer={(r) => responder("q3", r)}
          />

          <Question
            n="4"
            text="Props podem tornar um componente:"
            options={{
              A: "Reutilizável.",
              B: "Inutilizável.",
              C: "Somente estático.",
            }}
            answer={respostas.q4}
            onAnswer={(r) => responder("q4", r)}
          />

          <Question
            n="5"
            text="Qual pertence ao componente e pode mudar?"
            options={{
              A: "HTML",
              B: "State",
              C: "CSS",
            }}
            answer={respostas.q5}
            onAnswer={(r) => responder("q5", r)}
          />

          <button
            onClick={() => setResultado(true)}
            className="mt-6 w-full rounded-lg bg-emerald-600 p-3 font-bold text-white"
          >
            Ver Resultado
          </button>

          {resultado && (
            <div className="mt-4 rounded-lg bg-green-50 p-4 text-center font-bold text-green-700">
              Você acertou {pontuacao()} de 5!
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Usuario({ nome }: { nome: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-lg font-bold text-emerald-700">
        {nome}
      </p>
    </div>
  );
}

function Question({
  n,
  text,
  options,
  answer,
  onAnswer,
}: {
  n: string;
  text: string;
  options: Record<string, string>;
  answer?: string;
  onAnswer: (r: string) => void;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-slate-800">
        {n}. {text}
      </h3>

      <div className="mt-3 space-y-2">
        {Object.entries(options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onAnswer(key)}
            className={`w-full rounded-lg border p-3 text-left ${
              answer === key
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200"
            }`}
          >
            <strong>{key})</strong> {value}
          </button>
        ))}
      </div>
    </div>
  );
}
