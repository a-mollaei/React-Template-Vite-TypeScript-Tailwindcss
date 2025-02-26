import {FiMenu} from 'react-icons/fi';

type MenuButtonProps = {
    onClick: () => void;
};

const MenuButton = ({onClick}: MenuButtonProps) => {

    return (
        <button 
            onClick={() => {
                console.log('click !!!'); 
                onClick(); 
            }} 
            className='text-white p-2 rounded hover:bg-gray-700 transition'
        >
            <FiMenu size={24} />
        </button>
    );
};

export default MenuButton ;