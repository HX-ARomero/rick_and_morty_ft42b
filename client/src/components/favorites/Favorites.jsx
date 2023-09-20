import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions.js';
import Card from '../card/Card.jsx';

function Favorites({myFavorites, onClose}) {
   // console.log(characters); // [ {...}, {...}, ... ]
   const [aux, setAux] = useState(false);

   const dispatch = useDispatch();
   
   //! AL INICIO DESPACHA ACCIÓN "order"
   useEffect(() => {
      dispatch(orderCards("A"));
   }, [])
   //!

   const handleOrder = event => {
      dispatch(orderCards(event.target.value));
      aux ? setAux(false) : setAux(true);
   }

   const handleFilter = event => {
      dispatch(filterCards(event.target.value));
   }

   const cardContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }

   return (
      <div>
         <select name="order" onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>
         <select name="filter" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown.">unknown</option>
         </select>
         <div style={cardContainer}>
            {
               myFavorites.map((character, index) => (
                  <Card
                     id={character.id}
                     // onClose={onClose}
                     key={index}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin.name}
                     image={character.image}
                     onClose={() => onClose(character.id)}
                  />
               ))
            }
         </div>
      </div>
   );
}

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);