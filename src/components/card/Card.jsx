import styles from "./Card.module.css"; // { }

export default function Card(props) {
   // console.log(props.origin);
   return (
      <div className={styles.container} >
         <button onClick={props.onClose}>X</button>
         {/* <button onClick={() => props.onClose(props.id)}>X</button> */}
         <h2>{props.name}</h2>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
