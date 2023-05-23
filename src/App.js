import React from 'react';
import './App.css';
import ryu from './imagenes/Ryu.png';
import chunli from './imagenes/chunli.png';
import ryugif from './imagenes/Ryu.gif';
import chunligif from './imagenes/chunli.gif';
import ken from './imagenes/ken.png';
import kengif from './imagenes/ken.gif';
import CharacterCard from './CharacterCard';


function App() {

  let names = [
    {name:"Ryu", country:"Japan", sex:"Male", img: ryu, imgHover: ryugif},
    {name:"Chun-Li", country:"China", sex:"Female", img: chunli, imgHover: chunligif},
    {name:"Ken", country:"USA", sex:"Male", img: ken, imgHover: kengif}
  ];

  return (
    <div className="main-container">
      <div className='logo'>Select Character</div>
      <div className='container'>
        {names.map((character, index) => 
          <CharacterCard 
            key={index} 
            name={character.name} 
            country={character.country}
            img={character.img}
            imgHover={character.imgHover}
          />
        )}
      </div>
    </div>
  );
}

export default App;
