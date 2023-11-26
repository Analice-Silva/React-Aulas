const city = 'Esp. Sto do Pinhal';
const endereco = {
    uf: 'MA',
    cidade: 'Santa Luzia',
    bairro: 'Floresta',
    rua: 'Rua Grande',
    n: 58,
}

const listaDeCidades = [
    'Vargem Grande', 'Andradas', 'Varginha', 'Campinas', 'Franca'
]

function Header() {
  return (
    <header>
        <h1>{city}</h1>
        <h2>Meu endereço:</h2>
        <p>UF: <b>{endereco.uf}</b> </p>
        <p>Cidade: <b> {endereco.cidade}</b> </p>
        <p>Bairro: <b>{endereco.bairro}</b> </p>
        <p>Rua: <b>{endereco.rua}</b> </p>
        <p>Nº: <b>{endereco.n}</b> </p>

        <h2>Lista de Cidades</h2>
        <p>{listaDeCidades.join(', ')}</p>
    </header>
  )
}

export default Header