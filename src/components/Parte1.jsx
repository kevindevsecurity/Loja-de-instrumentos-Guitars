
import styles from "./Parte1.module.css";

export default function Parte1() {
  return (
    <section id={styles.parte1}>
      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <h2>Nossa Loja - Guitars</h2>
          <p>
            Se você é um apaixonado por música e busca um novo instrumento sem abrir mão da qualidade, 
            você está no lugar certo! Em nossa loja, você encontrará os melhores itens, como teclados, 
            pianos (digitais e acústicos), contrabaixos, baterias, guitarras, violões, instrumentos 
            de sopro e muito mais, todos com o selo de qualidade das melhores marcas do mercado para 
            garantir a sua satisfação musical.
          </p>
        </div>
        <div className={styles.loja}>
          <img src="/img/imagem-destacada-loja-de-violao.png" alt="Loja de instrumentos" />
        </div>
      </div>
    </section>
  );
}



