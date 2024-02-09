import { useGetProductsQuery } from "../rtk/features/apiSlice";
import { Item } from "./Item";
import { Loader } from "./Loader";

export const New = () => {
  const { isLoading, isError, error, isSuccess, data } =
    useGetProductsQuery("?limit=4&skip=74");
  return (
    <div className="container py-20">
      <h1 className="main_title">new arrival</h1>

      {isLoading && <Loader />}
      {isError && (
        <h1 className="text-center text-4xl capitalize">Error : {error}</h1>
      )}

      <div className="py-5 grid gap-5 grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
        {isSuccess &&
          data.products.map((item) => {
            return <Item key={item?.id} item={item} />;
          })}
      </div>
    </div>
  );
};
