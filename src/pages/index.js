import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
