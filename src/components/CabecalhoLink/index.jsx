import { Link } from 'react-router-dom';
import styles from '../CabecalhoLink/CabecalhoLink.module.css';

function CabecalhoLink({url, children}) {
    return (
        <header className={styles.cabecalho}>
            <Link to={url} className={styles.link}>
            {children}
                
            </Link>
        </header>
        
    );
}   

export default CabecalhoLink;