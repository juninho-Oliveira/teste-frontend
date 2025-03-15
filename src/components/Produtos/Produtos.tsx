import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Produtos.module.scss";
import { ProductCard } from "../ProdutosCard/ProdutosCard";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  category: string;
}

const categories = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver Todos"];

export const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("Celular");

  useEffect(() => {
    axios
      .get("https://lista-de-produtos.onrender.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro ao buscar os produtos", error));
  }, []);

  const filteredProducts =
    activeCategory === "Celular"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className={styles.productShowcase}>
      <h2 className={styles.title}>Produtos relacionados</h2>

      <div className={styles.containerMain}>
        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? styles.active : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductCard products={filteredProducts} />
      </div>
    </section>
  );
};
