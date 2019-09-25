import { connect } from 'react-redux';
import { selectAllPokemon } from './../../reducers/selectors';
import PokemonIndex from './../../components/pokemon/pokemon_index.jsx';
import { requestAllPokemon } from './../../actions/pokemon_actions';

const mapStateToProps = state => ({
  // const { pokemon } = state.entities;
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => {
    return dispatch(requestAllPokemon())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
