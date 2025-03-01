import { useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import CloseMenu from "../hooks/CloseMenu";
import ImageSlider from "../components/ImageSlider";
import ShowProducts from "../components/ShowProducts";
import SalesChart from '../components/SalesChart';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);   
    const sidebarRef = useRef<HTMLDivElement | null>(null); 

    CloseMenu(sidebarRef, () => setSidebarOpen(false));

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col h-screen"> 
            
            <aside
                ref={sidebarRef}
                className={`bg-gray-900 text-white w-64 p-4 transition-transform duration-300 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                fixed top-0 left-0 h-full z-60`}
            >
                <h2 className="text-xl font-bold">Dashboard-Menu</h2>
                <ul>
                    <li className="mt-4 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200">صفحه اصلی</li>
                    <li className="mt-4 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200">تنظیمات</li>
                    <li className="mt-4 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200">پروفایل</li>
                    <li className="mt-4 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"> محصولات </li>
                </ul>
            </aside>

            <div className="flex-1 flex flex-col"> 

                <Navbar toggleSidebar={toggleSidebar} className="fixed top-0 left-0 w-full z-50"  />

                <div className="w-full mt-4"> 
                    <ImageSlider />
                </div>
                <div className="w-full mt-6">
                    <ShowProducts />
                </div>
                <div className='w-full mt-4'>
                    <SalesChart />
                </div>

                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
