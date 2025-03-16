import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png"
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div className={styles.containerNewsLestter}>
                    <div className={styles.inscreva}>
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>
                            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                        </p>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputContainer}>
                            <input type="text" placeholder="Digite seu nome" />
                            <input type="email" placeholder="Digite seu e-mail" />
                            <button>INSCREVER</button>
                        </div>
                        <div>
                            <label className={styles.terms}>
                                <input type="checkbox" /> Aceito os termos e condições
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.footerContent}>
                <div className={styles.containerFooterLogoLinks}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.socialIcons}>
                            <a href="#"><FiInstagram /></a>
                            <a href="#"><FiFacebook /></a>
                            <a href="#"><FiLinkedin /></a>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.links}>
                        <div>
                            <h3>Institucional</h3>
                            <a href="#">Sobre Nós</a>
                            <a href="#">Movimento</a>
                            <a href="#">Trabalhe Conosco</a>
                        </div>

                        <div>
                            <h3>Ajuda</h3>
                                <a href="#">Suporte</a>
                                <a href="#">Fale Conosco</a>
                                <a href="#">Perguntas Frequentes</a>
                        </div>

                        <div>
                            <h3>Termos</h3>
                                <a href="#">Termos e Condições</a>
                                <a href="#">Política de Privacidade</a>
                                <a href="#">Troca e Devolução</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerP}>
                <p className={styles.copy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    );
};
