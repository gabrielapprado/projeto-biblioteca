import  { useState } from "react";

export default function AulaRenderizacaoCondicional() {
  const [logado, setLogado] = useState(false);
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

        <header className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white shadow-lg">
          <span className="text-sm font-bold uppercase">
            Aula 04
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Renderização Condicional
          </h1>

          <p className="mt-3 text-orange-100">
            Aprenda a exibir diferentes elementos dependendo de
            condições.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            1. O que é renderização condicional?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Renderização condicional significa apresentar um
            elemento somente quando determinada condição for
            verdadeira.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Em outras palavras, podemos perguntar:
          </p>

          <div className="mt-4 rounded-xl bg-orange-50 p-5">
            <p className="font-bold text-orange-700">
              "Essa condição é verdadeira?"
            </p>

            <p className="mt-2 text-orange-600">
              Se sim → mostramos um conteúdo.
            </p>

            <p className="text-orange-600">
              Se não → mostramos outro conteúdo ou nada.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            2. Usando if
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`function Mensagem({ logado }) {
  if (logado) {
    return <p>Bem-vindo!</p>;
  }

  return <p>Faça login.</p>;
}`}
          </pre>

          <p className="mt-4 text-slate-600">
            O React exibirá uma mensagem diferente de acordo
            com o valor de <strong>logado</strong>.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            3. Operador ternário
          </h2>

          <p className="mt-4 text-slate-600">
            Uma forma muito utilizada dentro do JSX é o operador
            ternário.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`{logado ? (
  <p>Bem-vindo!</p>
) : (
  <p>Faça login.</p>
)}`}
          </pre>

          <div className="mt-5 rounded-xl bg-slate-50 p-6 text-center">
            {logado ? (
              <>
                <p className="text-2xl font-bold text-green-600">
                  Bem-vindo!
                </p>

                <p className="mt-2 text-slate-600">
                  Você está conectado.
                </p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-red-600">
                  Você não está conectado.
                </p>

                <p className="mt-2 text-slate-600">
                  Faça login para continuar.
                </p>
              </>
            )}

            <button
              onClick={() => setLogado(!logado)}
              className="mt-5 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
            >
              {logado ? "Sair" : "Entrar"}
            </button>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            4. Operador &&
          </h2>

          <p className="mt-4 text-slate-600">
            Quando queremos mostrar algo somente se uma condição
            for verdadeira, podemos utilizar <strong>&&</strong>.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`{logado && (
  <p>
    Você está conectado!
  </p>
)}`}
          </pre>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            5. Renderização condicional + Tailwind
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`<div
  className={
    logado
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }
>
  ...
</div>`}
          </pre>

          <div
            className={`mt-5 rounded-xl p-5 text-center font-bold ${
              logado
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {logado
              ? "Status: usuário conectado"
              : "Status: usuário desconectado"}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Questionário
          </h2>

          <Question
            n="1"
            text="O que é renderização condicional?"
            options={{
              A: "Exibir conteúdo de acordo com uma condição.",
              B: "Criar um banco de dados.",
              C: "Excluir componentes.",
            }}
            answer={respostas.q1}
            onAnswer={(r) => responder("q1", r)}
          />

          <Question
            n="2"
            text="Qual operador pode ser utilizado para uma condição simples?"
            options={{
              A: "===",
              B: "&&",
              C: "++",
            }}
            answer={respostas.q2}
            onAnswer={(r) => responder("q2", r)}
          />

          <Question
            n="3"
            text="Qual estrutura permite escolher entre dois conteúdos?"
            options={{
              A: "map",
              B: "filter",
              C: "Operador ternário",
            }}
            answer={respostas.q3}
            onAnswer={(r) => responder("q3", r)}
          />

          <Question
            n="4"
            text="Podemos alterar classes Tailwind de acordo com uma condição?"
            options={{
              A: "Sim.",
              B: "Não.",
              C: "Somente com CSS externo.",
            }}
            answer={respostas.q4}
            onAnswer={(r) => responder("q4", r)}
          />

          <Question
            n="5"
            text="O que determina o conteúdo exibido?"
            options={{
              A: "Somente o HTML.",
              B: "A condição definida pelo programa.",
              C: "O navegador.",
            }}
            answer={respostas.q5}
            onAnswer={(r) => responder("q5", r)}
          />

          <button
            onClick={() => setResultado(true)}
            className="mt-6 w-full rounded-lg bg-orange-500 p-3 font-bold text-white"
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
                ? "border-orange-500 bg-orange-50 text-orange-700"
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
