import styles from "./Navegue.module.scss"

interface CardMarcasProps {
    imagem: string;
}


export const CardMarcas = ({imagem}: CardMarcasProps) => {
    return (
        <div className={styles.cardMarcas}>
            <img src={imagem} alt="Marca" />
        </div>
    )
}