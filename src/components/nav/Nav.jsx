import SearchBar from "../searchBar/SearchBar";

export default function Nav( { onSearch } ) {
    // props = { onSearch }
   return (
      <div>
        <SearchBar
            onSearch={ onSearch }
        />
      </div>
   );
}
