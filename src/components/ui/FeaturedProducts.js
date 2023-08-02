import { useEffect, useState } from "react";
import ProductSection from "./ProductSection";

const FeaturedProducts = ({ products }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    const featuredProducts = shuffledProducts.slice(0, 6);
    setFeaturedProducts(featuredProducts);
  }, [products]);

  return (
    <ProductSection title={"Featured Products"} products={featuredProducts} />
  );
};

export default FeaturedProducts;
