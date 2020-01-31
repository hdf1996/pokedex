import './PokemonCard.css'

const PokemonCard = (props) => {
  return (
    <div className="pokemonCard">
      Nombre: {props.name}
    </div>
  )
}

export default PokemonCard;
