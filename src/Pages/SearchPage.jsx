import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const searchText = searchParams.get("text");

  const getSearchResults = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchText]); // ✅ searchText pe dependency

  return (
    <div>
      <Navbar />
      <main className="flex flex-col- gap-6">
        {products.map((elem) => (
          <ProductCard key={elem.id} {...elem} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
