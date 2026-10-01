import  { useState } from "react";

export default function AulaComponentesJSX() {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [resultado, setResultado] = useState(false);

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

  const pontuacao = () =>
    Object.keys(gabarito).filter(
      (q) =>
        respostas[q] ===
        gabarito[q as keyof typeof gabarito]
    ).length;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <header className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg">
          <span className="text-sm font-semibold uppercase">
            Aula 02
          </span>

          <h1 className="mt-2 text-3xl font-bold">
            Componentes e JSX
          </h1>

          <p className="mt-3 text-indigo-100">
            Aprenda a criar componentes, utilizar JSX e
            reutilizar estruturas da interface.
          </p>
        </header>

        <Section title="1. O que é um componente?">
          <p>
            Um componente é uma parte independente da interface
            que pode ser criada e reutilizada.
          </p>

          <pre>
{`function Saudacao() {
  return (
    <h1>Olá!</h1>
  );
}`}
          </pre>

          <div className="mt-4 rounded-xl bg-indigo-50 p-5">
            <h1 className="text-2xl font-bold text-indigo-700">
              Olá!
            </h1>
          </div>
        </Section>

        <Section title="2. Utilizando componentes">
          <p>
            Depois de criar um componente, podemos utilizá-lo
            como se fosse uma nova tag.
          </p>

          <pre>
{`<Saudacao />`}
          </pre>

          <p>
            Componentes personalizados normalmente começam com
            letra maiúscula.
          </p>

          <pre>
{`function Card() {
  return (
    <div className="rounded-lg bg-white p-5">
      <h2>Meu Card</h2>
    </div>
  );
}`}
          </pre>

          <Card
            titulo="Meu Card"
            descricao="Este é um componente reutilizável."
          />
        </Section>

        <Section title="3. JSX">
          <p>
            JSX permite misturar JavaScript com uma estrutura
            semelhante ao HTML.
          </p>

          <pre>
{`const nome = "Maria";

return (
  <h1>
    Olá, {nome}!
  </h1>
);`}
          </pre>

          <div className="mt-4 rounded-xl bg-purple-50 p-5">
            <p className="text-xl font-bold text-purple-700">
              Olá, Maria!
            </p>
          </div>
        </Section>

        <Section title="4. JavaScript dentro do JSX">
          <p>
            Podemos utilizar expressões JavaScript dentro de
            chaves.
          </p>

          <pre>
{`const idade = 20;

<p>
  Você tem {idade} anos.
</p>`}
          </pre>

          <p className="mt-4 text-lg">
            Você tem <strong>20</strong> anos.
          </p>
        </Section>

        <Section title="5. Props">
          <p>
            Props permitem enviar informações para componentes.
          </p>

          <pre>
{`function Usuario({ nome }) {
  return (
    <h2>{nome}</h2>
  );
}

<Usuario nome="Maria" />
<Usuario nome="João" />`}
          </pre>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card
              titulo="Maria"
              descricao="Usuária do sistema"
            />

            <Card
              titulo="João"
              descricao="Usuário do sistema"
            />
          </div>
        </Section>

        <Section title="6. Tailwind dentro dos componentes">
          <p>
            Cada componente pode possuir suas próprias classes
            Tailwind.
          </p>

          <pre>
{`function Botao() {
  return (
    <button className="
      rounded-lg
      bg-indigo-600
      px-5
      py-3
      text-white
    ">
      Continuar
    </button>
  );
}`}
          </pre>

          <button className="mt-4 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
            Continuar
          </button>
        </Section>

        <Section title="Questionário">
          <Question
            n="1"
            text="O que é um componente?"
            options={{
              A: "Uma parte reutilizável da interface.",
              B: "Um banco de dados.",
              C: "Um navegador.",
            }}
            answer={respostas.q1}
            onAnswer={(r) => responder("q1", r)}
          />

          <Question
            n="2"
            text="Como utilizamos um componente?"
            options={{
              A: "<component>",
              B: "<MeuComponente />",
              C: "component()",
            }}
            answer={respostas.q2}
            onAnswer={(r) => responder("q2", r)}
          />

          <Question
            n="3"
            text="O que JSX permite?"
            options={{
              A: "Criar bancos de dados.",
              B: "Substituir JavaScript.",
              C: "Escrever estruturas de interface dentro do JavaScript.",
            }}
            answer={respostas.q3}
            onAnswer={(r) => responder("q3", r)}
          />

          <Question
            n="4"
            text="Para que servem props?"
            options={{
              A: "Enviar informações para componentes.",
              B: "Criar o navegador.",
              C: "Instalar React.",
            }}
            answer={respostas.q4}
            onAnswer={(r) => responder("q4", r)}
          />

          <Question
            n="5"
            text="Onde podemos utilizar classes Tailwind?"
            options={{
              A: "Somente no CSS.",
              B: "No className dos elementos.",
              C: "Somente no JavaScript externo.",
            }}
            answer={respostas.q5}
            onAnswer={(r) => responder("q5", r)}
          />

          <button
            onClick={() => setResultado(true)}
            className="mt-6 w-full rounded-lg bg-indigo-600 p-3 font-bold text-white"
          >
            Ver Resultado
          </button>

          {resultado && (
            <div className="mt-4 rounded-lg bg-green-50 p-4 text-center font-bold text-green-700">
              Você acertou {pontuacao()} de 5!
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <div className="space-y-4 leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function Card({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-indigo-700">
        {titulo}
      </h3>

      <p className="mt-2 text-slate-600">
        {descricao}
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
                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
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
