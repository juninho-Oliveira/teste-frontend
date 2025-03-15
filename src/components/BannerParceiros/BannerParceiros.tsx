import styles from "./BannerParceiros.module.scss";
import banner from "../../assets/imagens/image 45.png"
import { ParceiroCard } from "../CardParceiros/CardParceiros";

const parceiros = [
    {
        imagem: banner,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        link: "#"
    },
    {
        imagem: banner,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        link: "#"
    }
];

export const BannerParceiros = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.containerBanner}>
                <div className={styles.cards}>
                    {parceiros.map((parceiro, index) => (
                        <ParceiroCard key={index} {...parceiro} />
                    ))}
                </div>
            </div>
        </section>
    );
};