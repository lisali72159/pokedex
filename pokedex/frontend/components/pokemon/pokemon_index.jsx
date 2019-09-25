import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }  
  render() {
    let items = this.props.pokemon.map((poke) => {
      // debugger
      return (
        <li>
          <span>{poke.name}</span>
          <img src={poke.image_url} height="22" width="22" />
        </li>
      )
    });
    
    return (
      <ul>
        {items}
      </ul>
  )}
}

export default PokemonIndex;