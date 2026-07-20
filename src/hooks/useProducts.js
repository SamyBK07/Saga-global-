import { useMemo } from "react";
import data from "../data/products.json";

const products = data.products;

export const useProducts = ({ category, search } = {}) => {
  return useMemo(() => {
    let result = products;

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (search && search.trim() !== "") {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [category, search]);
};
