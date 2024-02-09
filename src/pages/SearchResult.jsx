import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../rtk/features/apiSlice";
import { Item } from "../components/Item";
import { Loader } from "../components/Loader";
import { Search } from "./Search";

export const SearchResult = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get("q");

  const { isLoading, isError, error, isSuccess, data } = useGetProductsQuery(
    `/search?q=${searchQuery}`
  );

  {
    isLoading && <Loader />;
  } //show loader till data show

  {
    isError && (
      <h1 className="text-3xl font-bold uppercase">Error : {error}</h1>
    );
  } //show error if excite

  return (
    <div className="container min-h-screen">
      <h1 className="mt-5 mb-10 text-3xl font-bold uppercase">Search</h1>
      <Search />
      {isSuccess && data.products.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
          {isSuccess &&
            data.products.map((item) => {
              return <Item item={item} key={item.id} />;
            })}
        </div>
      ) : (
        <h1 className="uppercase font-bold text-3xl text-center">
          No products found
        </h1>
      )}
    </div>
  );
};
