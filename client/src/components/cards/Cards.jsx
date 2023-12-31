import Card from '../card/Card.jsx';

export default function Cards({characters, onClose}) {
   // console.log(characters); // [ {...}, {...}, ... ]
   const cardContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }
   return (
      <div style={cardContainer}>
         {
            characters.map((character, index) => (
               <Card
                  id={character.id}
                  // onClose={onClose}
                  //* caracter = {id(string), name(string), origin({name(string)})}
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
   );
}
