// import { categoryLink } from "@/assets/commonData/categoryLink";
// import RootLayout from "@/components/layout/RootLayout";
// import Head from "next/head";
// import Link from "next/link";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const PCBuilderPage = ({ products }) => {
//   const selectedProducts = useSelector(
//     (state) => state.pcBuilder.selectedProducts
//   );

//   const categories = [];
//   const categoriesMap = {};

//   products?.forEach((item) => {
//     if (!categoriesMap[item.category]) {
//       categoriesMap[item.category] = true;
//       categories.push(item.category);
//     }
//   });

//   const totalPricing = Object.values(selectedProducts).reduce(
//     (total, productId) =>
//       total +
//       (products.find((product) => product.id === productId)?.price || 0),
//     0
//   );

//   const [buildComplete, setBuildComplete] = useState(false);

//   const handleBuildComplete = () => {
//     setBuildComplete(true);
//   };

//   return (
//     <div className="container mx-auto py-8 mt-6">
//       <Head>
//         <title>PC Builder</title>
//       </Head>
//       <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
//       <div className="flex gap-8">
//         <div className="grid grid-cols-1 gap-4 w-2/3">
//           {categories.map((category) => (
//             <div key={category} className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">{category}</h3>

//               <div className="flex gap-6">
//                 {selectedProducts[category] ? (
//                   <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
//                     <p className="font-semibold">
//                       {
//                         products.find(
//                           (product) => product.id === selectedProducts[category]
//                         )?.name
//                       }
//                     </p>
//                     <p>
//                       $
//                       {
//                         products.find(
//                           (product) => product.id === selectedProducts[category]
//                         )?.price
//                       }
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md w-full">
//                     <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
//                     <div className="h-4 bg-gray-300 rounded w-1/3"></div>
//                   </div>
//                 )}

//                 <Link
//                   href={`/categories/pc-builder/${categoryLink[category]}`}
//                   className="flex-end"
//                 >
//                   <button className="btn btn-primary">Choose</button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-1/3">
//           <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
//           {Object.keys(selectedProducts).length === categories.length ? (
//             <div>
//               <ul>
//                 {categories.map((category) => (
//                   <li key={category} className="text-gray-800 text-lg">
//                     {category}:{" "}
//                     {selectedProducts[category]
//                       ? products.find(
//                           (product) => product.id === selectedProducts[category]
//                         ).name
//                       : "No product selected"}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex flex-col gap-12">
//                 <p className="text-lg font-bold mt-4">
//                   Total Pricing: ${totalPricing.toFixed(2)}
//                 </p>

//                 <button
//                   className="btn btn-primary"
//                   onClick={handleBuildComplete}
//                 >
//                   Complete Build
//                 </button>
//               </div>

//               {buildComplete && (
//                 <div className="alert alert-success mt-10">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="stroke-current shrink-0 h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>
//                     <strong className="font-semibold">Success!</strong> Your
//                     build has been completed.
//                   </span>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <p>Please select one product from each category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PCBuilderPage;

// PCBuilderPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
//   const data = await res.json();

//   return {
//     props: {
//       products: data.data,
//     },
//   };
// }

import { categoryLink } from "@/assets/commonData/categoryLink";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const PCBuilderPage = ({ products }) => {
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

  const totalPricing = Object.values(selectedProducts).reduce(
    (total, productId) =>
      total +
      (products.find((product) => product.id === productId)?.price || 0),
    0
  );

  const [buildComplete, setBuildComplete] = useState(false);

  const handleBuildComplete = () => {
    setBuildComplete(true);
  };

  return (
    <div className="container mx-auto py-8 mt-6">
      <Head>
        <title>PC Builder</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-2/3">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
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
        <div className="md:w-1/3">
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

                <button
                  className="btn btn-primary"
                  onClick={handleBuildComplete}
                >
                  Complete Build
                </button>
              </div>

              {buildComplete && (
                <div className="alert alert-success mt-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold">Success!</strong> Your
                    build has been completed.
                  </span>
                </div>
              )}
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
