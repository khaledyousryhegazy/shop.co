import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useGetProductsQuery } from "../rtk/features/apiSlice";

export const Categories = () => {
  const { isLoading, isError, error, isSuccess, data } =
    useGetProductsQuery("categories");
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <div className="min-h-screen container">
      <h1 className="text-3xl font-bold uppercase mt-5 mb-10">categories</h1>
      {isLoading && <Loader />}

      {isError && <h1 className="text-center font-bold text-4xl">{error}</h1>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
        {isSuccess &&
          data.map((cate, index) => {
            return (
              <Link
                to={`/categories/${cate}`}
                key={index}
                className="flex rounded-md justify-center items-center bg-black h-64"
              >
                <h1 className="text-white text-xl font-bold uppercase">
                  {cate}
                </h1>
              </Link>
            );
          })}
      </div>
      <div></div>
    </div>
  );
};
