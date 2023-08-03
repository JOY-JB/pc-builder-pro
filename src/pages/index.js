import RootLayout from "@/components/layout/RootLayout";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Head from "next/head";
import Link from "next/link";

const HomePage = ({ products }) => {
  return (
    <div className="flex-1">
      <Head>
        <title>Home</title>
      </Head>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.datocms-assets.com/34299/1658908744-custom-pc-path-primary-web.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-10 text-6xl font-bold ">Welcome to PC Builder</h1>
            <p className="mb-8 text-lg">
              Build your dream PC with our wide selection of high-performance
              components. Find the perfect CPU, GPU, motherboard, and more for
              your gaming and content creation needs.
            </p>
            <Link href={"/pc-builder"}>
              <button className="btn btn-primary">Customize Your PC</button>
            </Link>
          </div>
        </div>
      </div>

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
