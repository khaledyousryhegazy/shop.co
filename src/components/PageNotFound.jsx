import { FaBan } from "react-icons/fa";

export const PageNotFound = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="flex items-center gap-3 text-red-600">
        <h1 className="text-3xl uppercase font-bold">page is not found</h1>
        <FaBan className="text-3xl" />
      </div>
    </div>
  );
};
