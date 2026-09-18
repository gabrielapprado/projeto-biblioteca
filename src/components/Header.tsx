function Header(){
    return(
        <header className="border-b-4 border-black">
            <nav className="mx-auto flex max-w-5xl itemns-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold">
                    Biblioteca
                </h1>
                <div className="flex gap-6">
                    <a href="#" className="font-medium hover:text-blue-600">Início</a>
                    <a href="#" className="font-medium hover:text-blue-600">Livros</a>
                    <a href="#" className="font-medium hover:text-blue-600">Usuários</a>
                    <a href="#" className="font-medium hover:text-blue-600">Empréstimos</a>
                    <a href="sobre.html" className="font-medium hover:text-blue-600">Sobre</a>
                </div>
            </nav>
        </header>
    )
}
export default Header