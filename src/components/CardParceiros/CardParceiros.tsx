import styles from "./CardParceiros.module.scss";

interface ParceiroCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    link: string;
}

export const ParceiroCard = ({ imagem, titulo, descricao, link }: ParceiroCardProps) => {
     
    // console.log("chegou? ", imagem, titulo, descricao, link);

    return (
        <div className={styles.card}>
            <img src={imagem} alt={titulo} />
            <div className={styles.overlay}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <a href={link}>Confira</a>
            </div>
        </div>
    );
};
