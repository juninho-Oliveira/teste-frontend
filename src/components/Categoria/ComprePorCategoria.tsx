import React from "react";
import { FaLaptop, FaUtensils, FaWineGlass, FaTools, FaHeart, FaDumbbell, FaTshirt } from "react-icons/fa";
import styles from "./ComprePorCategoria.module.scss";

const categorias = [
  { nome: "Tecnologia", icone: <FaLaptop /> },
  { nome: "Supermercado", icone: <FaUtensils /> },
  { nome: "Bebidas", icone: <FaWineGlass /> },
  { nome: "Ferramentas", icone: <FaTools /> },
  { nome: "Saúde", icone: <FaHeart /> },
  { nome: "Esportes e Fitness", icone: <FaDumbbell /> },
  { nome: "Moda", icone: <FaTshirt /> },
];

export const ComprePorCategoria: React.FC = () => {
  return (
    <section className={styles.comprePorCategoria}>
      <div className={styles.containerCategoria}>
        {categorias.map((categoria, index) => (
          <div key={index} className={styles.categoria}>
            <span className={styles.icone}>{categoria.icone}</span>
            <p>{categoria.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


