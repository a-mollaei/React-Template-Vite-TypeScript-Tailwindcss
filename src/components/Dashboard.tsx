import React , {useState} from 'react';
import {Menu} from 'lucide-react';
import {Button} from './components/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from './components/Dropdown-menu';

const Dashboard = () => {
    const StyleMenu = 'hover:bg-green-500 hover:text-white p-2 cursor-pointer';
    const NavClasses = 'bg-blue-600 text-white p-4 flex justify-between item-center shadow-lg';
    return(
        <nav className={NavClasses}>
            <div className='text-xl font-bold'>Dashboard</div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='text-white flex item-center gap-2'>
                        <Menu className='w-6 h-6' />
                        <span>Menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white text-blue-600 w-48 mt-2 rounded-lg shadow-md border'>
                    <DropdownMenuItem className={StyleMenu}>MainPage</DropdownMenuItem>
                    <DropdownMenuItem className={StyleMenu}>Conect with us</DropdownMenuItem>
                    <DropdownMenuItem className={StyleMenu}>Mahsolat</DropdownMenuItem>
                    <DropdownMenuItem className={StyleMenu}>take Order</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
};

export default Dashboard ;