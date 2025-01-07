import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h1>404</h1>
            <p>Página não encontrada</p>
        </section>
    );
}

export default NaoEncontrada;