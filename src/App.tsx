import { useState } from "react";
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Navbar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import {NaveguePorMarcas} from "./components/NavegueMarcas/Navegue"
import { BannerParceiros } from "./components/BannerParceiros/BannerParceiros";
import { ProductShowcase } from "./components/Produtos/Produtos"
import { ComprePorCategoria } from "./components/Categoria/ComprePorCategoria";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Black Friday");

  return (
    <>
      <Header />
      <Navbar onSelectCategory={setSelectedCategory} />
      <Banner category={selectedCategory} />
      <ComprePorCategoria />
      <ProductShowcase showMenu={true}/>
      <BannerParceiros />
      <ProductShowcase />
      <BannerParceiros />
      <NaveguePorMarcas />
      <ProductShowcase />
      <Footer />
    </>
  );
}

export default App;
