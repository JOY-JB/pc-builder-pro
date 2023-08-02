import { categoryLink } from "@/assets/commonData/categoryLink";
import RootLayout from "@/components/layout/RootLayout";
import ProductSection from "@/components/ui/ProductSection";
import { useGetProductsQuery } from "@/redux/api/apiSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PcBuilderCategory = () => {
  const { data } = useGetProductsQuery();
  const router = useRouter();
  const { category } = router.query;
  const [categoryProducts, setCategoryProducts] = useState([]);

  const products = data?.data;

  const getCategoryNameFromLink = (link) => {
    const categoryName = Object.keys(categoryLink).find(
      (key) => categoryLink[key] === link
    );
    return categoryName || link;
  };

  const categoryName = getCategoryNameFromLink(category);

  useEffect(() => {
    if (category && products) {
      const categoryProducts = products.filter(
        (product) => product.category === categoryName
      );

      setCategoryProducts(categoryProducts);
    }
  }, [category, products, categoryName]);

  return (
    <div className="flex-1">
      <Head>
        <title>Pc-Builder Products</title>
      </Head>

      <ProductSection
        title={categoryName}
        products={categoryProducts}
        pcBuilder={true}
      />
    </div>
  );
};

export default PcBuilderCategory;

PcBuilderCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
