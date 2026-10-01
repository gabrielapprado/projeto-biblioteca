import  { useState } from "react";

export default function AulaFundamentosReact() {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const gabarito = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "B",
  };

  const responder = (questao: string, alternativa: string) => {
    setRespostas((atual) => ({
      ...atual,
      [questao]: alternativa,
    }));

    setMostrarResultado(false);
  };

  const calcularPontuacao = () => {
    let acertos = 0;

    Object.keys(gabarito).forEach((questao) => {
      if (
        respostas[questao] ===
        gabarito[questao as keyof typeof gabarito]
      ) {
        acertos++;
      }
    });

    return acertos;
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* CABEÇALHO */}

        <header className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <span className="text-sm font-semibold uppercase tracking-wider">
            Aula 01
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Fundamentos do React
          </h1>

          <p className="mt-3 text-blue-100">
            Nesta aula vamos entender o que é React, como ele
            funciona e quais são os principais conceitos iniciais.
          </p>
        </header>

        {/* O QUE É REACT */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            1. O que é React?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            React é uma biblioteca JavaScript utilizada para
            construir interfaces de usuário. Ele permite dividir
            uma interface em pequenas partes chamadas componentes.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Em vez de construir uma página inteira como um único
            bloco, podemos separar a aplicação em partes menores,
            facilitando a organização e a reutilização do código.
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">
              Ideia principal
            </p>

            <p className="mt-2 text-blue-700">
              React permite construir interfaces utilizando
              componentes reutilizáveis.
            </p>
          </div>
        </section>

        {/* PRIMEIRO COMPONENTE */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            2. Nosso primeiro componente
          </h2>

          <p className="mt-4 text-slate-600">
            Um componente React normalmente é uma função que
            retorna uma interface utilizando JSX.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
{`function App() {
  return (
    <h1>
      Olá, React!
    </h1>
  );
}`}
          </pre>

          <p className="mt-4 leading-7 text-slate-600">
            A função <strong>App</strong> é um componente. O
            conteúdo dentro do <strong>return</strong> representa
            aquilo que será apresentado na tela.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-5">
            <h3 className="text-xl font-bold text-slate-800">
              Resultado:
            </h3>

            <h1 className="mt-3 text-3xl font-bold text-blue-600">
              Olá, React!
            </h1>
          </div>
        </section>

        {/* JSX */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            3. O que é JSX?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            JSX é uma sintaxe que permite escrever uma estrutura
            semelhante ao HTML dentro do JavaScript.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
{`const nome = "Maria";

return (
  <h1>
    Olá, {nome}!
  </h1>
);`}
          </pre>

          <div className="mt-5 rounded-xl bg-blue-50 p-5">
            <p className="text-2xl font-bold text-blue-700">
              Olá, Maria!
            </p>
          </div>
        </section>

        {/* TAILWIND */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            4. React + Tailwind CSS
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            O Tailwind CSS permite estilizar os elementos utilizando
            classes diretamente no atributo <strong>className</strong>.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
{`<div className="rounded-lg bg-blue-600 p-5">
  <h2 className="text-2xl font-bold text-white">
    Minha aplicação
  </h2>
</div>`}
          </pre>

          <div className="mt-5 rounded-xl bg-blue-600 p-5">
            <h2 className="text-2xl font-bold text-white">
              Minha aplicação
            </h2>

            <p className="mt-2 text-blue-100">
              Este elemento foi estilizado com Tailwind CSS.
            </p>
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            Algumas classes utilizadas no exemplo:
          </p>

          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              <strong>bg-blue-600</strong> → define a cor de fundo.
            </li>
            <li>
              <strong>p-5</strong> → adiciona espaçamento interno.
            </li>
            <li>
              <strong>text-white</strong> → deixa o texto branco.
            </li>
            <li>
              <strong>text-2xl</strong> → aumenta o tamanho do texto.
            </li>
            <li>
              <strong>font-bold</strong> → deixa o texto em negrito.
            </li>
            <li>
              <strong>rounded-lg</strong> → arredonda as bordas.
            </li>
          </ul>
        </section>

        {/* EVENTO */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            5. React responde às ações do usuário
          </h2>

          <p className="mt-4 text-slate-600">
            Podemos criar eventos para responder às ações do
            usuário.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
{`<button onClick={() => alert("Olá!")}>
  Clique aqui
</button>`}
          </pre>

          <button
            onClick={() => alert("Olá! Você clicou no botão.")}
            className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Clique aqui
          </button>
        </section>

        {/* QUESTIONÁRIO */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Questionário de Fixação
          </h2>

          <Question
            numero="1"
            texto="O que é React?"
            opcoes={{
              A: "Uma biblioteca JavaScript para interfaces.",
              B: "Um banco de dados.",
              C: "Um sistema operacional.",
            }}
            resposta={respostas.q1}
            onResponder={(r) => responder("q1", r)}
          />

          <Question
            numero="2"
            texto="O que é JSX?"
            opcoes={{
              A: "Um banco de dados.",
              B: "Uma sintaxe utilizada para escrever interfaces.",
              C: "Um navegador.",
            }}
            resposta={respostas.q2}
            onResponder={(r) => responder("q2", r)}
          />

          <Question
            numero="3"
            texto="Qual atributo usamos para classes no React?"
            opcoes={{
              A: "class",
              B: "styleClass",
              C: "className",
            }}
            resposta={respostas.q3}
            onResponder={(r) => responder("q3", r)}
          />

          <Question
            numero="4"
            texto="O Tailwind CSS pode ser utilizado com React?"
            opcoes={{
              A: "Sim.",
              B: "Não.",
              C: "Somente em aplicativos mobile.",
            }}
            resposta={respostas.q4}
            onResponder={(r) => responder("q4", r)}
          />

          <Question
            numero="5"
            texto="Para que servem componentes?"
            opcoes={{
              A: "Somente para armazenar dados.",
              B: "Para organizar e reutilizar partes da interface.",
              C: "Para substituir o navegador.",
            }}
            resposta={respostas.q5}
            onResponder={(r) => responder("q5", r)}
          />

          <button
            onClick={() => setMostrarResultado(true)}
            className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
          >
            Ver Resultado
          </button>

          {mostrarResultado && (
            <div className="mt-5 rounded-lg bg-green-50 p-5 text-center">
              <p className="text-lg font-bold text-green-700">
                Você acertou {calcularPontuacao()} de 5 perguntas!
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Question({
  numero,
  texto,
  opcoes,
  resposta,
  onResponder,
}: {
  numero: string;
  texto: string;
  opcoes: Record<string, string>;
  resposta?: string;
  onResponder: (resposta: string) => void;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-slate-800">
        {numero}. {texto}
      </h3>

      <div className="mt-3 space-y-2">
        {Object.entries(opcoes).map(([letra, texto]) => (
          <button
            key={letra}
            onClick={() => onResponder(letra)}
            className={`w-full rounded-lg border p-3 text-left transition ${
              resposta === letra
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <strong>{letra})</strong> {texto}
          </button>
        ))}
      </div>
    </div>
  );
}
