import { Component } from 'react'

import './PokemonDetail.css'

class PokemonDetail extends Component {
  state = { sprites: {} }
  componentDidMount () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
      .then(res => res.json())
      .then(body => this.setState({
        sprites: body.sprites
      }))
  }

  render () {
    const { sprites } = this.state;
    return (
      <div className="container">
        <div className="pokemonDetail">
          <h1>{this.props.name}</h1>

          {Object.keys(sprites).map(key => (
            <img src={sprites[key]} />
          ))}
        </div>
      </div>
    )
  }
}

export default PokemonDetail
