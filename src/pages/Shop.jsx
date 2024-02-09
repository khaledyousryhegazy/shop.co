import { Item } from "../components/Item";
import { Loader } from "../components/Loader";
import { useGetProductsQuery } from "../rtk/features/apiSlice";
import { Search } from "./Search";

export const Shop = () => {
  const { isLoading, isError, error, isSuccess, data } =
    useGetProductsQuery("?limit=100&skip=0");

  window.scrollTo({ top: 0, behavior: "auto" });

  return (
    <div className="min-h-screen container">
      <h1 className="mt-5 mb-10 text-3xl font-bold uppercase">
        get what you want
      </h1>

      {/* Search here */}
      <Search />

      {isLoading && <Loader />}

      {isError && <h1 className="text-center font-bold text-4xl">{error}</h1>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
        {isSuccess &&
          data.products.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
