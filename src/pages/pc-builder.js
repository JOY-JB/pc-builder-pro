import { categoryLink } from "@/assets/commonData/categoryLink";
import RootLayout from "@/components/layout/RootLayout";
import { selectProduct } from "@/redux/features/pcBuilder/pcBuilderSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PCBuilderPage = ({ products }) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.pcBuilder.selectedProducts
  );

  const categories = [];
  const categoriesMap = {};

  products?.forEach((item) => {
    if (!categoriesMap[item.category]) {
      categoriesMap[item.category] = true;
      categories.push(item.category);
    }
  });

  const handleProductSelect = (category, productId) => {
    dispatch(selectProduct({ category, productId }));
  };

  const totalPricing = Object.values(selectedProducts).reduce(
    (total, productId) =>
      total +
      (products.find((product) => product.id === productId)?.price || 0),
    0
  );

  return (
    <div className="container mx-auto py-8 mt-6">
      <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
      <div className="flex gap-8">
        <div className="grid grid-cols-1 gap-4 w-2/3">
          {categories.map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{category}</h3>

              <div className="flex gap-6">
                {selectedProducts[category] ? (
                  <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <p className="font-semibold">
                      {
                        products.find(
                          (product) => product.id === selectedProducts[category]
                        )?.name
                      }
                    </p>
                    <p>
                      $
                      {
                        products.find(
                          (product) => product.id === selectedProducts[category]
                        )?.price
                      }
                    </p>
                  </div>
                ) : (
                  <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  </div>
                )}

                <Link
                  href={`/categories/pc-builder/${categoryLink[category]}`}
                  className="flex-end"
                >
                  <button className="btn btn-primary">Choose</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
          {Object.keys(selectedProducts).length === categories.length ? (
            <div>
              <ul>
                {categories.map((category) => (
                  <li key={category} className="text-gray-800 text-lg">
                    {category}:{" "}
                    {selectedProducts[category]
                      ? products.find(
                          (product) => product.id === selectedProducts[category]
                        ).name
                      : "No product selected"}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-12">
                <p className="text-lg font-bold mt-4">
                  Total Pricing: ${totalPricing.toFixed(2)}
                </p>

                <button className="btn btn-primary">Complete Build</button>
              </div>
            </div>
          ) : (
            <p>Please select one product from each category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
