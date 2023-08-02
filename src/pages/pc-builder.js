import RootLayout from "@/components/layout/RootLayout";
import { useState } from "react";

const PCBuilderPage = ({ products }) => {
  const categories = [];
  const categoriesMap = {};

  products?.forEach((item) => {
    if (!categoriesMap[item.category]) {
      categoriesMap[item.category] = true;
      categories.push(item.category);
    }
  });

  const [selectedProducts, setSelectedProducts] = useState({});

  const handleProductSelect = (category, productId) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [category]: productId,
    }));
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

              <select
                className="select select-primary mt-4 block w-full"
                value={selectedProducts[category] || ""}
                onChange={(e) => handleProductSelect(category, e.target.value)}
              >
                <option value="">Select a product</option>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} - ${product.price}
                    </option>
                  ))}
              </select>
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
              <p className="text-lg font-bold mt-4">
                Total Pricing: ${totalPricing.toFixed(2)}
              </p>
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
