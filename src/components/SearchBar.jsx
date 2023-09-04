export default function SearchBar(props) {
   // props = { onSearch }
   return (
      <div>
         <input
            type="text"
            name="search"
            id="search"
         />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
