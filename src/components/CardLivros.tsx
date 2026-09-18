interface CardLivrosProps {
  titulo: string
  autor: string
  categoria: string
  imagem?: string
}

function CardLivros({
  titulo,
  autor,
  categoria,
  imagem,
}: CardLivrosProps) {
  return (
    <article className="flex gap-6 border-b border-gray-300 py-6">
      <div className="h-32 w-24 shrink-0 border-2 border-black">
        <img 
          src={imagem} 
          alt={`Capa do livro ${titulo}`} 
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900">
          {titulo}
        </h3>

        <p className="mt-2 text-gray-600">
          {autor}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {categoria}
        </p>
      </div>
    </article>
  )
}

export default CardLivros
