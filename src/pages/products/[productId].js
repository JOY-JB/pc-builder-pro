import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";

const ProductDetailsPage = ({ product }) => {
  if (!product) {
    return (
      <div className="container mx-auto py-16">
        <p className="text-center text-2xl font-bold">Product not found.</p>
      </div>
    );
  }

  const {
    name,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
    image,
  } = product;

  return (
    <div className="container mx-auto py-16 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-gray-500 mb-4">{category}</p>
          <div className="flex items-center mb-4">
            <p className="text-lg font-bold">${price}</p>
            <span className="ml-2 px-2 py-1 bg-green-500 text-white rounded">
              {status}
            </span>
          </div>
          <p className="mb-4">{description}</p>
          <h3 className="text-xl font-bold mb-2">Key Features:</h3>
          <ul className="list-disc ml-6 mb-4">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mb-4">
            <p className="text-lg font-bold">
              Individual Rating: {individualRating}
            </p>
            <p className="text-lg font-bold">Average Rating: {averageRating}</p>
          </div>
          <h3 className="text-xl font-bold mb-2">Reviews:</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p className="text-lg font-bold">{review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const data = await res.json();

  const products = data.data;

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
