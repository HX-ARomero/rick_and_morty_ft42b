import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import './App.css';

function App() {

   const [ characters, setCharacters ] = useState([]); // [ estado, functión ]
   
   const navigate = useNavigate(); // path actual y redirige!!!
   // console.log(navigate);
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Por favor ingrese sus credenciales...")
      }
   }

   useEffect(() => {
      !access && navigate('/'); //! Ingresar a /home
   }, [access]);

   const location = useLocation();
   console.log(location.pathname);

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
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} />
            // "/"   false => X
            //  "/algoMas..." true => Evaluar la segunda parte
         }
         <Routes >
            <Route
               path="/"
               element={<Form login={login} />}
            />
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
            <Route
               path="*"
               element={<About />}
            />
         </Routes>
         
      </div>
   );
}

export default App;
