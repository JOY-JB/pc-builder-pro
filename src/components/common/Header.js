import { categoryLink } from "@/assets/commonData/categoryLink";
import { useGetProductsQuery } from "@/redux/api/apiSlice";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data } = useGetProductsQuery();
  const { data: session } = useSession();

  const categories = [];
  const categoriesMap = {};

  data?.data?.forEach((item) => {
    if (!categoriesMap[item.category]) {
      categoriesMap[item.category] = true;
      categories.push(item.category);
    }
  });

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                {categories.map((category) => (
                  <li key={category}>
                    <a>{category}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          PC Builder Pro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-base-200 z-10">
                {categories.map((category) => (
                  <li key={category} className="w-52">
                    <Link
                      href={`/categories/${categoryLink[category]}`}
                      className=""
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            {session ? (
              <button onClick={() => signOut()}>Sign out</button>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/pc-builder"} className="btn">
          Pc Builder
        </Link>
      </div>
    </div>
  );
};

export default Header;
