import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'

import './index.css'

const Index = () => {
  const [pokemonsList, setPokemonsList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=152')
      .then(res => res.json())
      .then(body => {
        setPokemonsList(body.results)
      })
  }, [])

  const onChange = e => setSearch(e.target.value)

  return (
    <div className="container">
      <input placeholder="Nombre" onChange={onChange}/>
      Buscando por {search}
      <div className="container">
        {pokemonsList.filter(pokemon => pokemon.name.includes(search)).map(pokemon => (
          <PokemonCard name={pokemon.name}/>
        ))}
      </div>
    </div>
  )
}

export default Index;
