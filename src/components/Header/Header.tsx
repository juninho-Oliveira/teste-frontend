import styles from './Header.module.scss';
import Logo from '../../assets/logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdAssignmentReturn } from "react-icons/md";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={Logo} alt="Logo da Loja" />
        </div>

        {/* Menu de navegação */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>

        {/* Ícones (Busca, Conta, Carrinho) */}
        <div className={styles.icons}>
        <button title='compras'><MdAssignmentReturn /></button>
        <button title='gostei'><CiHeart /></button>
          <button title='pesquisa'><FaRegUserCircle /></button>
          <button title='carrinho'><PiShoppingCart /></button>
        </div>
      </div>
    </header>
  );
}
