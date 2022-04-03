import { useDocumentTitle } from "../../hooks";
import Categories from "./Categories";
import Hero from "./Hero";

export default function () {
  useDocumentTitle("AegisTube");

  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
}
