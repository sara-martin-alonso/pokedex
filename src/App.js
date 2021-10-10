import { useState } from 'react';

import './styles/main.scss';

import PokeList from './components/PokeList';
import PokeImageChosen from './components/PokeImageChosen';

import useAPI from './hooks/useAPI';
import { fetchData } from './utils/functions';
import useImages from './hooks/useImages';

function App() {
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [imageNumber, setImageNumber] = useState(0);

  const { pokemons, handleNextClick, handlePrevClick, isListFetched } =
    useAPI();

  const handleClick = (url) => {
    fetchData(url, setChosenPokemon);
    setImageNumber(0);
  };

  const images = useImages({ chosenPokemon });

  const handleNextImageClick = (arrayLength) => {
    if (imageNumber >= arrayLength - 1) {
      setImageNumber(0);
    } else {
      setImageNumber((prev) => prev + 1);
    }
  };

  const handlePrevImageClick = (arrayLength) => {
    if (imageNumber === 0) {
      setImageNumber(arrayLength - 1);
    } else {
      setImageNumber((prev) => prev - 1);
    }
  };

  return (
    <div className='content'>
      <div className='b-pokedex'>
        <div className='container container-image'>
          <PokeImageChosen
            name={chosenPokemon.name}
            imageNumber={imageNumber}
            handleNextImageClick={handleNextImageClick}
            handlePrevImageClick={handlePrevImageClick}
            images={images}
          />
        </div>
        <div className='container container-list'>
          <PokeList
            pokemons={pokemons}
            chosenPokemon={chosenPokemon}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            handleClick={handleClick}
            isListFetched={isListFetched}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
