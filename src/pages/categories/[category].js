import { categoryLink } from "@/assets/commonData/categoryLink";
import RootLayout from "@/components/layout/RootLayout";
import ProductSection from "@/components/ui/ProductSection";
import Head from "next/head";

const CatagoryDetailsPage = ({ categoryName, categoryProducts }) => {
  return (
    <div className="flex-1">
      <Head>
        <title>Products</title>
      </Head>

      <ProductSection title={categoryName} products={categoryProducts} />
    </div>
  );
};

export default CatagoryDetailsPage;

CatagoryDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const data = await res.json();
  const products = data.data;

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const paths = categories.map((category) => ({
    params: { category: categoryLink[category] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const data = await res.json();
  const products = data.data;

  const getCategoryNameFromLink = (link) => {
    const categoryName = Object.keys(categoryLink).find(
      (key) => categoryLink[key] === link
    );
    return categoryName || link;
  };

  const categoryName = getCategoryNameFromLink(params.category);
  const categoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  return {
    props: {
      categoryName,
      categoryProducts,
    },
  };
};
