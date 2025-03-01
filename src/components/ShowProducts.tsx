import { useState, useRef } from "react";
import { products } from "../Mock/Products.ts";
import Pagination from "./Pagination";
import CloseMenu from "../hooks/CloseMenu";
import CategoryFilter from "../hooks/CategoryFilter";

const ShowProducts = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  CloseMenu(menuRef, () => setMenuOpen(null));

  const { selectedCategory, setSelectedCategory, filteredProducts, categories } = CategoryFilter(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-semibold mb-4">Latest Products</h2>
      
      <div className="mb-4">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto mx-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 min-w-max w-1/5 border-r border-gray-700">Product Name</th>
              <th className="p-2 min-w-max w-1/6 border-r border-gray-700">Category</th>
              <th className="p-2 min-w-max w-1/11 border-r border-gray-700">Price</th>
              <th className="p-2 min-w-max w-1/11 border-r border-gray-700">Date Added</th>
              <th className="p-2 min-w-max w-1/12 border-r border-gray-700">Stock</th>
              <th className="p-2 min-w-max w-1/12">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-700">
                <td className="p-2 h-12 whitespace-normal break-words border-r border-gray-700">{product.name}</td>
                <td className="p-2 h-12 whitespace-normal break-words border-r border-gray-700">{product.category}</td>
                <td className="p-2 h-12 whitespace-normal break-words border-r border-gray-700">${product.price}</td>
                <td className="p-2 h-12 whitespace-normal break-words border-r border-gray-700">{product.date}</td>
                <td className="p-2 h-12 whitespace-normal break-words border-r border-gray-700">{product.stock}</td>
                <td className="p-2 h-12 relative">
                <button
                    onClick={() => setMenuOpen(menuOpen === product.id ? null : product.id)}
                    className="text-gray-400 hover:text-white cursor-pointer ml-4"
                  >
                    &#8942;
                  </button>
                  {menuOpen === product.id && (
                    <div
                      ref={menuRef}
                      className="absolute bg-gray-800 text-white shadow-lg p-2 rounded right-0 md:right-auto md:left-0 w-32 z-60"
                    >
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">Edit</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={productsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShowProducts;
