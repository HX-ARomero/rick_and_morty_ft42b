import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
padding: 15px;
margin: 0;
`

const Input = styled.input`
   border-radius: 5px;
   height: 30px;
   padding: 4px;
`
const MyButton = styled.button`

   border-radius: 5px;
   color: azure;
   background-color: darkslategrey;
   &:hover {
      background-color: azure;
      color: darkslategrey;
   }
`

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
      <Container>
         <Input
            value={id}
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
         />
         <MyButton onClick={handleClick}>Agregar</MyButton>
      </Container>
   );
}
