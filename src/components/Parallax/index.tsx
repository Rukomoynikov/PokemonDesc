import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from 'Images/small_pokeball.svg';
import CloudPng from 'Images/clouds.svg';
import PokeBallPng from 'Images/pokeball.svg';
import CloudBigPng from 'Images/big_clouds.svg';
import PikachuPng from 'Images/Pikachu.svg';

export const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setScreenY(event.y)
      setScreenX(event.x)
    }

    window.addEventListener('mousemove', handleMouse)

    return () => window.removeEventListener('mousemove', handleMouse)
  }, [screenX, screenY])

  return (
    <div className={s.root}>
      <div 
        style={{
          transform: `translate(${screenY * 0.05}px, 
                                ${screenX * 0.05}px)`
        }}
        className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div 
        style={{
          transform: `translate(${screenY * 0.03}px, 
                                ${screenX * 0.03}px)`
        }}
        className={s.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div 
        style={{
          transform: `translate(${screenY * 0.03}px, 
                                ${screenX * 0.03}px)`
        }}
        className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div 
        style={{
          transform: `translate(${screenY * 0.02}px, 
                                ${screenX * 0.02}px)`
        }}
        className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div 
        style={{
          transform: `translate(${screenY * 0.01}px, 
                                ${screenX * 0.01}px)`
        }}
        className={s.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
