// import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
// import { useEffect,useState } from 'react';
import {Route,Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'
// components
import Header from './components/Header';
import PlayGame from './components/PlayGame';
import PlayerLobby from './components/PlayerLobby';
import HomePage from './components/HomePage';
import Routing from './components/Routing';
import PageNotFound from './components/PageNotFound';
import Waiting from './components/Waiting';
 function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Routing />}>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/playerLobby" element={<PlayerLobby />}></Route>
            <Route path="/playgame" element={<PlayGame />}></Route>
            <Route path="/waitingRoom" element={<Waiting />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
