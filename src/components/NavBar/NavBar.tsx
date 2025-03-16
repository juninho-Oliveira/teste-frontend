// src/components/Navbar.tsx
import styles from "./NavBar.module.scss";
import { TbCrown } from "react-icons/tb";
import { Category } from "../Banner/Banner";

interface NavbarProps {
  onSelectCategory: (category: Category) => void;
}

export const Navbar = ({ onSelectCategory }: NavbarProps) => {
  const categories: Category[] = ['Todas Categorias', 'Supermercado', 'Moda', 'Livros', 'Lançamentos', 'Ofertas do dia', 'Assinatura'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerNavBar}>
        {categories.map((category) => (
          <button key={category} onClick={() => onSelectCategory(category)}>
            {category === 'Assinatura' ? (
              <>
                <TbCrown fontSize={20} style={{ marginRight: '12px' }} /> {category}
              </>
            ) : (
              category
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};  
