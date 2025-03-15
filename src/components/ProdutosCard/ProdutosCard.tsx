import { useRef } from "react";
import styles from "./ProdutosCard.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ProductCardProps {
  products: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.productCardContainer}>
      <button title="left" className={styles.arrowLeft} onClick={scrollLeft}>
        <MdKeyboardArrowLeft size={40} />
      </button>

      <div className={styles.productsContainer} ref={scrollRef}>
        <div className={styles.products}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <img src={product.photo} alt={product.productName} />
              <p className={styles.description}>{product.descriptionShort}</p>
              <p className={styles.oldPrice}>R$ {(product.price * 1.2).toFixed(2)}</p>
              <p className={styles.currentPrice}>R$ {product.price.toFixed(2)}</p>
              <p className={styles.installments}>ou 12x de {(product.price / 12).toFixed(2)}</p>
              <p><span>Frete grátis</span></p>
              <button className={styles.buyButton}>COMPRAR</button>
            </div>
          ))}
        </div>
      </div>

      <button title="right" className={styles.arrowRight} onClick={scrollRight}>
        <MdKeyboardArrowRight size={40} />
      </button>
    </div>
  );
};
