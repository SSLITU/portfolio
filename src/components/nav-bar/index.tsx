import React from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from '../../assets/LOGO.png';

const NavBar: React.FC = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-evenly w-full">
                <NavLink
                    to='/' exact
                    className="" 
                >
                    <img src={mainLogo} alt="logo" className="shadow-l scale-75 transform mt-1" ></img>
                </NavLink>
                <NavLink
                    to='/post' exact
                    activeClassName="text-white"
                    className="py-3 px-3 my-6 rounded text-1xl md:text-4xl tracking-wider text-gray-800 hover:text-gray-500 font-bold"
                >
                    WORK
                </NavLink>
                <NavLink
                    to='/about' exact
                    activeClassName="text-white"
                    className="py-3 px-3 my-6 rounded text-1xl md:text-4xl tracking-wider text-gray-800 hover:text-gray-500 font-bold"
                >
                    ABOUT
                </NavLink>
                <NavLink
                    to='/projects' exact
                    activeClassName="text-white"
                    className="py-3 px-3 my-6 rounded text-1xl md:text-4xl tracking-wider text-gray-800 hover:text-gray-500 font-bold"
                >
                   TESTIMONIALS
                </NavLink>

            </div>
        </header>
    );
};

export default NavBar;