// src/components/Navbar.tsx
import styles from "./NavBar.module.scss";

interface NavbarProps {
  onSelectCategory: (category: string) => void;
}

export const Navbar = ({ onSelectCategory }: NavbarProps) => {
  const categories = ['Ofertas do dia','Todas Categorias' , 'Supermercado' , 'Moda' , 'Livros',  'Lançamentos',  'Assinatura'];

  return (
    <nav className={styles.navbar}>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </nav>
  );
};
