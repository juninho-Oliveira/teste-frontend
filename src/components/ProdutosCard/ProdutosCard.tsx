import { useRef, useState } from "react";
import styles from "./ProdutosCard.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Popup } from "../Popup/Popup";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  products: Product[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

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
              <p className={styles.oldPrice}>R$ {(product.price ).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p className={styles.currentPrice}>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p className={styles.installments}>ou 12x de { (product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2}) }</p>
              <p><span>Frete grátis</span></p>
              <button className={styles.buyButton} onClick={() => openPopup(product)}>
                COMPRAR
              </button>
            </div>
          ))}
        </div>
      </div>

      <button title="right" className={styles.arrowRight} onClick={scrollRight}>
        <MdKeyboardArrowRight size={40} />
      </button>

      {selectedProduct && <Popup {...selectedProduct} onClose={closePopup} />}

    </div>
  );
};
