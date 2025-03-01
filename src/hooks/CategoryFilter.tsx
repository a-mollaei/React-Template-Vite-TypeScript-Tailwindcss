import { useState, useMemo } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    date: string;
    stock: number;
}

const CategoryFilter = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => ["all", ...new Set(products.map((product) => product.category))], [products]);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [selectedCategory, products]
  );

  return { selectedCategory, setSelectedCategory, filteredProducts, categories };
};

export default CategoryFilter;
