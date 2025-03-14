import styles from './Header.module.scss';
import Logo from '../../assets/logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart, CiCreditCard1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdAssignmentReturn } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline, IoSearch } from "react-icons/io5";

export function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.topBar}>  
        <span><IoShieldCheckmarkOutline className={styles.iconeTopBar} /> Compra <strong>100% segura</strong></span>
        <span><RiTruckLine className={styles.iconeTopBar}  /> Frete grátis acima de <strong>R$ 200</strong></span>
        <span><CiCreditCard1  className={styles.iconeTopBar}  /> <strong>Parcele</strong> suas compras</span>
      </div>

      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={Logo} alt="Logo da Loja" />
        </div>

        <div className={styles.searchBar}>
          <button title='pesquisa'><IoSearch className={styles.searchIcon}/></button>
          <input type="text" placeholder='O que está buscando?'/>
        </div>

        {/* Ícones (Busca, Conta, Carrinho) */}
        <div className={styles.icons}>
        <button title='compras'><MdAssignmentReturn /></button>
        <button title='favoritos'><CiHeart /></button>
          <button title='usuario'><FaRegUserCircle /></button>
          <button title='carrinho'><PiShoppingCart /></button>
        </div>
      </div>
    </header>
  );
}
