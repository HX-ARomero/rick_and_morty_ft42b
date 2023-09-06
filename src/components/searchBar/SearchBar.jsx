import { useState } from "react";

export default function SearchBar(props) {
   // props = { onSearch }
   const [ id, setId ] = useState("");

   const handleChange = event => {
      // console.log(event.target.value);
      const { value } = event.target;
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }


   return (
      <div>
         <input
            value={id}
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
         />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
