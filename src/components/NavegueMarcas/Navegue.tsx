import styles from "./Navegue.module.scss"
import logo from "../../assets/logo.png"
import { CardMarcas } from "./CardMarcas";

export const NaveguePorMarcas = () => {

    return (
        <section className={styles.containerMarcas}>
            <div className={styles.containerCardMarcas}>
                <CardMarcas imagem={logo}/>
                <CardMarcas imagem={logo}/>
                <CardMarcas imagem={logo}/>
                <CardMarcas imagem={logo}/>
                <CardMarcas imagem={logo}/>
            </div>
        </section>
    );
}

