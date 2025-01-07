import Titulo from '../../components/Titulo';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import styles from './Inicio.module.css';
import { useEffect, useState } from 'react';


function Inicio() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/PHS-informatica/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])
    
    return (
        <>
            
            <Banner imagem="home" />
            <Titulo>
               <h1>Um lugar para guardar seus videos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video)=>{
                    return <Card key={video.id} {...video} />
                })}
            </section>
        
        </>
    );
}

export default Inicio;