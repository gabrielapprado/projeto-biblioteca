import { useState } from "react";

export default function AulaListasKeys() {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [resultado, setResultado] = useState(false);

  const produtos = [
    {
      id: 1,
      nome: "Notebook",
      preco: 3500,
    },
    {
      id: 2,
      nome: "Mouse",
      preco: 120,
    },
    {
      id: 3,
      nome: "Teclado",
      preco: 250,
    },
  ];

  const gabarito = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "B",
  };

  const responder = (q: string, resposta: string) => {
    setRespostas((atual) => ({
      ...atual,
      [q]: resposta,
    }));

    setResultado(false);
  };

  const pontuacao = () => {
    return Object.keys(gabarito).filter(
      (q) =>
        respostas[q] ===
        gabarito[q as keyof typeof gabarito]
    ).length;
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* CABEÇALHO */}

        <header className="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white shadow-lg">
          <span className="text-sm font-bold uppercase">
            Aula 05
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Listas e Keys
          </h1>

          <p className="mt-3 text-cyan-100">
            Aprenda como renderizar listas usando map() e
            como utilizar keys no React.
          </p>
        </header>

        {/* 1 - LISTAS */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            1. O que são listas?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Em aplicações React é muito comum apresentar vários
            elementos semelhantes na tela.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            Podemos ter listas de produtos, usuários, mensagens,
            tarefas ou categorias.
          </p>

          <div className="mt-4 space-y-2">
            <div className="rounded-lg bg-slate-50 p-3">
              Produtos
            </div>

            <div className="rounded-lg bg-slate-50 p-3">
              Usuários
            </div>

            <div className="rounded-lg bg-slate-50 p-3">
              Tarefas
            </div>
          </div>
        </section>

        {/* 2 - MAP */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            2. O método map()
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            O método <strong>map()</strong> percorre um array e
            permite criar uma nova estrutura para cada item.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`const nomes = [
  "Maria",
  "João",
  "Carlos"
];

{nomes.map((nome) => (
  <p>{nome}</p>
))}`}
          </pre>

          <p className="mt-4 text-slate-600">
            Nesse exemplo, o React cria um elemento para cada
            nome existente no array.
          </p>
        </section>

        {/* 3 - KEY */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            3. O que são Keys?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Quando renderizamos uma lista, o React precisa
            identificar cada elemento.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            Para isso utilizamos a propriedade especial
            <strong> key</strong>.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`{nomes.map((nome) => (
  <p key={nome}>
    {nome}
  </p>
))}`}
          </pre>

          <div className="mt-5 rounded-xl border-l-4 border-cyan-500 bg-cyan-50 p-4">
            <p className="font-bold text-cyan-700">
              Regra importante
            </p>

            <p className="mt-2 text-cyan-700">
              A key deve identificar de forma única cada item
              dentro daquela lista.
            </p>
          </div>
        </section>

        {/* 4 - OBJETOS */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            4. Lista de objetos
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Na prática, as listas normalmente são compostas por
            objetos.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 120
  }
];`}
          </pre>
        </section>

        {/* 5 - RENDERIZAÇÃO */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            5. Renderizando produtos
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Podemos utilizar o <strong>id</strong> do produto como
            sua key.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`{produtos.map((produto) => (
  <div key={produto.id}>
    <h2>{produto.nome}</h2>
    <p>{produto.preco}</p>
  </div>
))}`}
          </pre>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-blue-700">
                  {produto.nome}
                </h3>

                <p className="mt-2 text-xl font-bold text-slate-800">
                  R$ {produto.preco.toLocaleString("pt-BR")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 - ID COMO KEY */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            6. Qual key devemos usar?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Quando os objetos possuem um identificador único,
            normalmente podemos utilizá-lo como key.
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-green-300">
{`{produtos.map((produto) => (
  <div key={produto.id}>
    {produto.nome}
  </div>
))}`}
          </pre>

          <div className="mt-4 rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">
              Evite usar o índice sem necessidade
            </p>

            <p className="mt-2 text-amber-700">
              Se o objeto já possui um ID único, prefira o ID
              em vez do índice do array.
            </p>
          </div>
        </section>

        {/* RESUMO */}

        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-800">
            Resumo
          </h2>

          <div className="mt-4 space-y-2 text-blue-700">
            <p>✓ Arrays podem armazenar vários elementos.</p>
            <p>✓ map() percorre os elementos do array.</p>
            <p>✓ map() pode ser utilizado para renderizar listas.</p>
            <p>✓ Cada item de uma lista deve possuir uma key.</p>
            <p>✓ A key deve ser única dentro daquela lista.</p>
            <p>✓ IDs são boas opções para keys.</p>
          </div>
        </section>

        {/* QUESTIONÁRIO */}

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Questionário de Fixação
          </h2>

          <p className="mt-2 text-slate-500">
            Responda às perguntas para testar seus conhecimentos.
          </p>

          {/* QUESTÃO 1 */}

          <div className="mt-6">
            <p className="font-bold text-slate-800">
              1. Para que serve o método map()?
            </p>

            <button
              onClick={() => responder("q1", "A")}
              className={`mt-3 w-full rounded-lg border p-4 text-left ${
                respostas.q1 === "A"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              A) Para percorrer um array e gerar uma nova estrutura.
            </button>

            <button
              onClick={() => responder("q1", "B")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q1 === "B"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              B) Para criar automaticamente uma key.
            </button>
          </div>

          {/* QUESTÃO 2 */}

          <div className="mt-6">
            <p className="font-bold text-slate-800">
              2. Para que serve a key?
            </p>

            <button
              onClick={() => responder("q2", "A")}
              className={`mt-3 w-full rounded-lg border p-4 text-left ${
                respostas.q2 === "A"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              A) Para alterar o CSS da aplicação.
            </button>

            <button
              onClick={() => responder("q2", "B")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q2 === "B"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              B) Para identificar cada elemento da lista.
            </button>
          </div>

          {/* QUESTÃO 3 */}

          <div className="mt-6">
            <p className="font-bold text-slate-800">
              3. Qual é uma boa opção de key?
            </p>

            <button
              onClick={() => responder("q3", "A")}
              className={`mt-3 w-full rounded-lg border p-4 text-left ${
                respostas.q3 === "A"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              A) O índice sempre.
            </button>

            <button
              onClick={() => responder("q3", "B")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q3 === "B"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              B) O nome do componente.
            </button>

            <button
              onClick={() => responder("q3", "C")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q3 === "C"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              C) Um ID único do item.
            </button>
          </div>

          {/* QUESTÃO 4 */}

          <div className="mt-6">
            <p className="font-bold text-slate-800">
              4. Qual código está correto?
            </p>

            <button
              onClick={() => responder("q4", "A")}
              className={`mt-3 w-full rounded-lg border p-4 text-left ${
                respostas.q4 === "A"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              A) {"produtos.map((produto) => <div key={produto.id}>{produto.nome}</div>)"}
            </button>

            <button
              onClick={() => responder("q4", "B")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q4 === "B"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              B) {"produtos.key((produto) => produto.nome)"}
            </button>
          </div>

          {/* QUESTÃO 5 */}

          <div className="mt-6">
            <p className="font-bold text-slate-800">
              5. O que a key ajuda o React a fazer?
            </p>

            <button
              onClick={() => responder("q5", "A")}
              className={`mt-3 w-full rounded-lg border p-4 text-left ${
                respostas.q5 === "A"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              A) Remover todos os componentes.
            </button>

            <button
              onClick={() => responder("q5", "B")}
              className={`mt-2 w-full rounded-lg border p-4 text-left ${
                respostas.q5 === "B"
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-200"
              }`}
            >
              B) Identificar os elementos da lista durante atualizações.
            </button>
          </div>

          {/* RESULTADO */}

          <button
            onClick={() => setResultado(true)}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
          >
            Ver Resultado
          </button>

          {resultado && (
            <div className="mt-5 rounded-xl bg-green-50 p-5 text-center">
              <p className="text-lg font-bold text-green-700">
                Você acertou {pontuacao()} de 5 questões!
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
