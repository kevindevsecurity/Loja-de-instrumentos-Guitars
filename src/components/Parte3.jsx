import React from 'react';
import styles from './Parte3.module.css';

export default function Parte3() {
  return (
   
        <section className={styles.parte3}>
          <div className={styles.mapa}>
            <img src="/img/localiza.jpg" alt="Localização da loja" className={styles.img} />
          </div>
          <div className={styles.texto}>
            <h2>Localização e Ambiente Únicos</h2>
            <p>
              Nossa loja está estrategicamente situada na Rua Tito, 54 – Pompéia, uma área de prestígio em São Paulo.
              Você nos encontra em um belíssimo edifício datado do século XIX, que confere um charme histórico inigualável, 
              e a poucos passos do Teatro Cacilda Becker. Com uma ampla área de 500m², oferecemos uma variada gama de 
              instrumentos musicais em um ambiente agradável, acolhedor e convidativo para toda a família!
            </p>
          </div>
        </section>
      
  );
}



