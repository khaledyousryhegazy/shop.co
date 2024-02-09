import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../rtk/features/apiSlice";
import { Loader } from "../components/Loader";
import { Details } from "../components/Details";

export const ProductDetails = () => {
  const ID = useParams().id;

  window.scrollTo({ top: 0, behavior: "auto" });

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: product,
  } = useGetProductsQuery(`/${ID}`);

  return (
    <div className="container min-h-screen">
      <h1 className="mt-5 mb-10 font-bold text-3xl uppercase">
        about this product
      </h1>

      {isLoading && <Loader />}
      {isError && <h1 className="text-center font-bold text-4xl">{error}</h1>}
      {isSuccess && <Details product={product} />}
    </div>
  );
};
