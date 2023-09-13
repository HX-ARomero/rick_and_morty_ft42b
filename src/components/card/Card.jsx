import { Link } from "react-router-dom";
import styles from "./Card.module.css"; // { }
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card(props) {
   // props = { addFav, removeFav, allCharacters, id, name, origin, ... }
   console.log(props)
   const [isFav, setIsFav] = useState(false); // true <=> false

   useEffect(() => {
      props.allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.allCharacters]);

   const handleFavorite = event => {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   return (
      <div className={styles.container} >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose}>X</button>
         {/* <button onClick={() => props.onClose(props.id)}>X</button> */}
         <h2>{props.name}</h2>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <Link to={`/detail/${props.id}`} >
            <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      //! Traemos "allCharacters"
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addFav: character => {
         dispatch(addFav(character))
      },
      removeFav: id => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);