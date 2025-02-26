import MenuButton from "./MenuButton";

type NavbarPorps = {
    toggleSidebar: () => void ;
};

const Navbar = ({toggleSidebar}: NavbarPorps) => {
    return(
        <nav className="bg-gray-800 text-white px-4 py-3 flex items-center w-full">
            <MenuButton onClick={toggleSidebar} />
            <h1 className="text-lg font-semibold ml-4">Dashbboard!!</h1>
        </nav>
    );
};

export default Navbar ;