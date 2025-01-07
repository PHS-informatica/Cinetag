import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritosContext } from '../Contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({id, titulo, capa}) {
    const {favorito, adicionarFavorito} = useFavoritosContext(); 
    const efavorito = favorito.some((fav) => fav.id === id);
    const icone = !efavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
           <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => adicionarFavorito({id, titulo, capa})}
                />
{/*                 
                onClick={() => {
                    const listaAtualizada = favoritos.includes(id)
                        ? favoritos.filter(favorito => favorito !== id)
                        : [...favoritos, id];
                    setFavoritos(listaAtualizada);
                }} */}
        </div>
    )
}

    export default Card;

            