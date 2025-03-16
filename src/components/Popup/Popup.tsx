import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Ícone de fechar
import styles from "./Popup.module.scss";

interface PopupProps {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
    onClose: () => void;
}

export const Popup = ({ photo, productName, price, descriptionShort, onClose }: PopupProps) => {
    const [quanti, setQuanti] = useState<number>(1);

    const somar = () => setQuanti((prev) => prev + 1);

    const menos = () => setQuanti((prev) => (prev > 1 ? prev - 1 : prev));

    return (
        <section className={styles.containerPopupMain}>
            <div className={styles.containerPopup}>
                <button className={styles.closeButton} onClick={onClose}>
                    <AiOutlineClose size={20} />
                </button>
                <div className={styles.containerImg}>
                    <img src={photo} alt="imagem" />
                </div>
                <div className={styles.containerInformacao}>
                    <div>
                        <h2>{productName}</h2>
                        <p className={styles.price}>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        <p className={styles.descricao}>{descriptionShort}</p>
                        <a href="#">Veja mais detalhes de produtos </a>
                    </div>
                    <div className={styles.containerBotao}>
                        <div className={styles.botaoAdd}>
                            <button className={styles.botaoSomaMenos} title="menos" onClick={menos}>-</button>
                            <p className={styles.quantidade}>{String(quanti).padStart(2, "0")}</p>
                            <button className={styles.botaoSomaMenos} title="somar" onClick={somar}>+</button>
                        </div>
                        <button className={styles.botaCompra} title="comprar">COMPRAR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
