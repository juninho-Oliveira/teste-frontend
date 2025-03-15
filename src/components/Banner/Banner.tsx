// src/components/Banner.tsx
import styles from "./Banner.module.scss";
import bannerImagem from '../../assets/Banner.png'

type Category = 'Ofertas do dia' | 'Todas Categorias' | 'Supermercado' | 'Moda' | 'Livros' | 'Lançamentos' | 'Assinatura' ;

interface BannerProps {
    category: Category;
}

export const Banner = ({ category }: BannerProps) => {
    const banners = {
        "Ofertas do dia": { title: "Venha conhecer nossas promoções", span: "50% Off",text: "nos produtos", img: bannerImagem },
        "Todas Categorias": { title: "Lorem Ipsum is simply dummy text " , span: "50% Off", text: "Ofertas especiais no mercado", img: "../../assets/g" },
        "Supermercado": { title: "Lorem Ipsum is simply dummy text " , span: "50% Off", text: "Descontos em livros imperdíveis", img: "../../assets/" },
        "Moda": {title: "Lorem Ipsum is simply dummy text " , span: "50% Off", text: "Promoções em moda e acessórios", img: "../../assets/" },
        "Livros": {title: "Lorem Ipsum is simply dummy text ", span: "50% Off", text: "Promoções em moda e acessórios", img: "../../assets/" },
        "Lançamentos": {title: "Lorem Ipsum is simply dummy text ", span: "50% Off", text: "Promoções em moda e acessórios", img: "../../assets/" },
        "Assinatura": {title: "Lorem Ipsum is simply dummy text ", span: "50% Off", text: "Promoções em moda e acessórios", img: "../../assets/" },
    };


    const { text, img, title, span } = banners[category] || banners["Ofertas do dia"];

    return (
        <section className={styles.banner} style={{ backgroundImage: `url(${img})` }}>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p><span>{span}</span>{text}</p>
                <button>Ver produto</button>
            </div>
        </section>
    );
};
