import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../rtk/features/apiSlice";
import { Loader } from "../components/Loader";
import { Item } from "../components/Item";

export const ProductByCategory = () => {
  const cate = useParams().category;
  const { isLoading, isError, error, isSuccess, data } = useGetProductsQuery(
    `/category/${cate}`
  );

  window.scrollTo({ top: 0, behavior: "auto" });

  return (
    <div className="min-h-screen container">
      <h1 className="mt-5 mb-10 text-3xl font-bold capitalize">{cate}</h1>

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
