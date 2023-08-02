import { selectProduct } from "@/redux/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const ProductSection = ({ title, products, pcBuilder }) => {
  const getStarRating = (rating) => {
    const totalStars = 5;
    const roundedRating = Math.round(rating * 2) / 2;

    return Array.from({ length: totalStars }).map((_, index) => {
      if (index < Math.floor(roundedRating)) {
        return <BsStarFill key={index} className="text-yellow-500" />;
      } else if (index + 0.5 === roundedRating) {
        return <BsStarHalf key={index} className="text-yellow-500" />;
      } else {
        return <BsStar key={index} className="text-gray-400" />;
      }
    });
  };

  const { selectedProducts } = useSelector((state) => state.pcBuilder);
  const dispatch = useDispatch();

  const handleProductSelect = (category, productId) => {
    dispatch(selectProduct({ category, productId }));
  };

  const isProductAdded = (productId) => {
    return Object.values(selectedProducts).includes(productId);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        {!products.length ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <Link href={`/products/${product.id}`}>
                  <div
                    className="relative h-0 overflow-hidden"
                    style={{ paddingBottom: "66.666%" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={350}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold my-4">{product.name}</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-500 mb-4">
                      Category: {product.category}
                    </p>
                    <p className="text-lg">{product.status}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-lg font-bold">${product.price}</p>
                    <div className="flex mb-2">
                      {getStarRating(product.rating)}
                      <span className="ml-2 text-gray-500">
                        ({product.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  <p className="mb-4">{product.description}</p>
                </Link>

                {pcBuilder && (
                  <div className="flex justify-center">
                    <Link href={"/pc-builder"}>
                      <button
                        className="btn btn-primary px-16"
                        disabled={isProductAdded(product.id)}
                        onClick={() =>
                          handleProductSelect(product.category, product.id)
                        }
                      >
                        {isProductAdded(product.id)
                          ? "Added"
                          : "Add To Builder"}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
