import { categoryLink } from "@/assets/commonData/categoryLink";
import Link from "next/link";

const FeaturedCategories = ({ products }) => {
  const categories = [];
  const categoriesMap = {};

  products?.forEach((item) => {
    if (!categoriesMap[item.category]) {
      categoriesMap[item.category] = true;
      categories.push(item.category);
    }
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category} href={`/categories/${categoryLink[category]}`}>
              <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
