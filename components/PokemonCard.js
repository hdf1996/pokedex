import Link from 'next/link'

import './PokemonCard.css'

const PokemonCard = ({ name }) => {

  return (
    <Link href={`/pokemons/${name}`}>
      <a>
        <div className="pokemonCard">
          Nombre: {name}
        </div>
      </a>
    </Link>
  )
}

export default PokemonCard;
