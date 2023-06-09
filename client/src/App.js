import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import FormUser from './components/FormUser/FormUser.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  async function login(userData) {
    const { username, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';

    try {
      const response = await axios.get(URL, {
        params: {
          email: username,
          password: password
        }
      });

      const { access } = response.data;
      setAccess(response.data);

      if (access) {
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onSearch(id) {
    try {
      const characterId = characters.filter(char => char.id === id);
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

      if (characterId.length) {
        return alert(`Ya tienes la carta con el id: ${id}`);
      }
      if (id < 1 || id > 826) {
        return alert(`No existe una carta con el id: ${id}`);
      }

      const { data } = response;

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(`¡No existe un personaje ${id}!`);
    }
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id));
  }

  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      {/* <Scroll /> */}
      <Routes>
        <Route exact path='/' element={<FormUser login={login} />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/detail/:id' element={<Detail onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;