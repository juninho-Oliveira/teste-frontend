import { useState } from "react";
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Navbar } from "./components/NavBar/NavBar";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("Black Friday");

  return (
    <>
      <Header />
      <Navbar onSelectCategory={setSelectedCategory} />
      <Banner category={selectedCategory} />
    </>
  );
}

export default App;
