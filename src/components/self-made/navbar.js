import React from 'react';
import ThemeToggle from './themetoggle';
import { AppWindow } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-10 bg-white bg-opacity-0 backdrop-filter backdrop-blur'>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center text-sm">
                    <AppWindow className="w-6 h-6 mr-2" />
                    Full Stack Developer
                </div>
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;