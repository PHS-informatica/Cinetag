import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio/Index.jsx'
import Favoritos from './Pages/Favoritos/Index.jsx';
import Player from './Pages/Player/index';
import NaoEncontrada from './Pages/NaoEncontrada/index.jsx';
import PaginaBase from './Pages/PaginaBase/Index.jsx';


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PaginaBase />} >
          <Route index element={<Inicio />} ></Route>
          <Route path="Favoritos" element={<Favoritos />} ></Route>
          <Route path=":id" element={<Player />} ></Route>
          <Route path="*" element={<NaoEncontrada />} ></Route>
        </Route>
      </Routes>


    </BrowserRouter>
  );
}

export default AppRoutes;