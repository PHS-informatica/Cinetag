import Rodape from "../../components/Rodape";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import FavoritosProvider from "../../components/Contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
   <main>
    <Cabecalho />
    <FavoritosProvider>
        <Container>
            <Outlet />
        </Container>
    </FavoritosProvider>
    <Rodape />
   </main>
  );
}

export default PaginaBase;