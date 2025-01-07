import { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({children}) {
 const [favorito, setFavorito] = useState([]);
 
    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritosContext() {
    const {favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
     const favoritoExiste = favorito.some((item) => item.id === novoFavorito.id);   
        
     let novaLista = [...favorito];
     if(!favoritoExiste) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }
        const indice = novaLista.findIndex(item => item.id === novoFavorito.id);
        if (indice !== -1) {
            novaLista.splice(indice, 1);
        }
        
        return setFavorito(novaLista);
    }
    
    return {favorito, adicionarFavorito};
}