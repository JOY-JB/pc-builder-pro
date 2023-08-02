import RootLayout from "@/components/layout/RootLayout";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Head from "next/head";

const HomePage = ({ products }) => {
  return (
    <div className="flex-1">
      <Head>
        <title>Home</title>
      </Head>

      <header className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to PC Builder
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Build your dream PC with ease!
          </p>
        </div>
      </header>

      {/* Featured Products Section */}
      <FeaturedProducts products={products} />

      {/* Featured Categories Section */}
      <FeaturedCategories products={products} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
