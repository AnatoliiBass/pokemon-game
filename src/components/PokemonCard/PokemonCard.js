import stylePokemonCard from './PokemonCard.module.css';
import cardBackSide from './assets/card-back-side.jpg';
import { useState } from 'react';

const PokemonCard = ({ name, img, id, type, values }) => {
   const [isActive, setActive] = useState(false);
   const onClickPokemon = () => setActive(true);
   return (
      <div className={stylePokemonCard.root} onClick={onClickPokemon}>
         <div className={`${stylePokemonCard.pokemonCard} ${isActive ? stylePokemonCard.active : ''}`}>
            <div className={stylePokemonCard.cardFront}>
               <div className={`${stylePokemonCard.wrap} ${stylePokemonCard.front}`}>
                  <div className={stylePokemonCard.pokemon}>
                     <div className={stylePokemonCard.values}>
                        <div className={`${stylePokemonCard.count} ${stylePokemonCard.top}`}>{values.top}</div>
                        <div className={`${stylePokemonCard.count} ${stylePokemonCard.right}`}>{values.right}</div>
                        <div className={`${stylePokemonCard.count} ${stylePokemonCard.bottom}`}>{values.bottom}</div>
                        <div className={`${stylePokemonCard.count} ${stylePokemonCard.left}`}>{values.left}</div>
                     </div>
                     <div className={stylePokemonCard.imgContainer}>
                        <img src={img} alt={name} />
                     </div>
                     <div className={stylePokemonCard.info}>
                        <span className={stylePokemonCard.number}>#{id}</span>
                        <h3 className={stylePokemonCard.name}>{name}</h3>
                        <small className={stylePokemonCard.type}>Type: <span>{type}</span></small>
                     </div>
                  </div >
               </div >
            </div >

            <div className={stylePokemonCard.cardBack}>
               <div className={`${stylePokemonCard.wrap} ${stylePokemonCard.back}`}>
                  <img src={cardBackSide} alt="Сard Backed" />
               </div>
            </div >

         </div >
      </div >
   );
}

export default PokemonCard;