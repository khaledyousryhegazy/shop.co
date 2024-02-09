import { BestSeller } from "../components/BestSeller";
import { Customers } from "../components/Customers";
import { Landing } from "../components/Landing";
import { New } from "../components/New";

export const Home = () => {
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <>
      <Landing />
      <New />
      <BestSeller />
      <Customers />
    </>
  );
};
