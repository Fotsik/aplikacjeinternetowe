import React, { useState, useEffect } from 'react';
import Game from './Game';
import Tile from './Tile';

function MemoryGame() {
  let [tiles, setTiles] = useState([]);
  let [tilesAmount, setTilesAmount] = useState(12);
  let [score, setScore] = useState(0);
  let [level, setLevel] = useState('easy');
  let [firstTile, setFirstTile] = useState('');

  const [disabled, setDisabled] = useState(false);

  const showTile = (e) => {
    const target = e.target.style;
    target.backgroundColor = `rgb(${255 - e.target.id*3}, ${255 - e.target.id*3}, ${255 - e.target.id*3})`;
    target.borderColor = 'white';
    target.color = "black";
    setTimeout(() => {
      target.borderColor = 'rgb(15, 182, 0)';
      target.backgroundColor = 'rgb(15, 182, 0)';
      target.color = "rgb(15, 182, 0)";
    }, 1500);


    if(!firstTile){
      return setFirstTile(e.target);
    }

    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);


      if(firstTile.id === e.target.id && (firstTile.offsetLeft !== e.target.offsetLeft || firstTile.offsetTop !== e.target.offsetTop )){
        setTimeout(() => {
          setScore(score + 1);
          firstTile.style.opacity = "0";
          e.target.style.opacity = "0";
          setFirstTile('');
      }, 500);
      } else {
        setFirstTile('');
      }
  }

  useEffect(() => {
    let numbers = [];
    for(let i = 0; i < tilesAmount / 2; i++){
      numbers.push(i);
    }
    let cloneNumbers = [...numbers];
    let allNumbers = numbers.concat(cloneNumbers);
    const shuffle = [...allNumbers].sort(() => Math.random() - 0.5);
    setTiles(shuffle);
  }, [tilesAmount])


  return (
    <div className="App">
      <input type="button" value="Łatwy" onClick={() => {
          setLevel('easy');
          setTilesAmount(12);
          setScore(0);
        }}/>
      <input type="button" value="Średni" onClick={() => {
          setLevel('medium');
          setTilesAmount(24);
          setScore(0);
        }}/>
      <input type="button" value="Trudny" onClick={() => {
          setLevel('hard');
          setTilesAmount(36);
          setScore(0);
        }}/>
      <Game>
        {tiles.map((tile, index) => {
          return <Tile key={level + index} id={tile} showTile={showTile} disabled={disabled}>{tile}</Tile>
        })}
      </Game>
      <p className="score">Punkty: {score}</p>
    </div>
  );
}

export default MemoryGame;
