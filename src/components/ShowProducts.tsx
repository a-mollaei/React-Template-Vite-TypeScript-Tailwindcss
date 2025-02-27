import { useState, useRef } from "react";
import { products } from "../Mock/Products.ts";
import Pagination from "./Pagination";
import CloseMenu from "../hooks/CloseMenu"

const ProductTable = () => {

  const menuRef = useRef<HTMLDivElement | null>(null); 

  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  CloseMenu(menuRef , () => setMenuOpen(null));
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-semibold mb-4">Latest Products</h2>
      <div className="overflow-x-auto mx-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 min-w-max border-r border-gray-700">Product Name</th>
              <th className="p-2 min-w-max border-r border-gray-700">Category</th>
              <th className="p-2 min-w-max border-r border-gray-700">Price</th>
              <th className="p-2 min-w-max border-r border-gray-700">Date Added</th>
              <th className="p-2 min-w-max border-r border-gray-700">Stock</th>
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
                      className="absolute bg-gray-800 text-white shadow-lg p-2 rounded right-0 md:right-auto md:left-0 w-32"
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
        totalItems={products.length}
        itemsPerPage={productsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductTable;