import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from "axios";

import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';

function App() {

   const [ characters, setCharacters ] = useState([]); // [ estado, functión ]
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   // characters = [ {id:1}, {id:3} ]
   // id = 2

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes >
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
         </Routes>
         
      </div>
   );
}

export default App;
