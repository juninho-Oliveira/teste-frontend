// src/components/Navbar.tsx
import styles from "./NavBar.module.scss";

interface NavbarProps {
  onSelectCategory: (category: string) => void;
}

export const Navbar = ({ onSelectCategory }: NavbarProps) => {
  const categories = [ 'Todas Categorias', 'Supermercado', 'Moda', 'Livros', 'Lançamentos', 'Ofertas do dia', 'Assinatura'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerNavBar}>
        {categories.map((category) => (
          <button key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};
