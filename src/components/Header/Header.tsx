import styles from './Header.module.scss';
import Logo from '../../assets/logo.png'

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
          <button>🔍</button>
          <button>👤</button>
          <button>🛒</button>
        </div>
      </div>
    </header>
  );
}
