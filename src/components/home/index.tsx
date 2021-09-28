import React from 'react';
import { SocialIcon } from 'react-social-icons';
import profilePicture from '../../assets/Sebastian.png';
import NavBar from '../nav-bar';
// I think I want a component that maps out some designed objects here.

const Home: React.FC = () => {
    return (
        <main className="relative min-h-screen min-w-full bg-gray-100">
            <div className="absolute inset-0 w-1/3 bg-white transform "></div>
            <div className="relative"> 

            <NavBar/>

            <div className="container absolute grid grid-cols-3 min-w-full h-screen">
                <div className="relative"></div>
                <div className="col-span-2 h-full">
                <img src={profilePicture} alt="profile" className="scale-75 transform ml-10"/>
                
                </div>
            </div>
            <div className=" h-full m-12 block">
                <div className="relative w-1/2 pt-4">
                    <h2 className="text-2xl md:text-4xl font-serif leading-normal tracking-wide">Hi, I’m Sebastian 🖐</h2>
                    <h2 className="text-2xl md:text-4xl font-serif leading-normal tracking-wide">Frontend developer & interaction designer based in Copenhagen</h2>
                </div>
                {/* Jeg bør finde en måde at placere det bedre i forhold til bunden. */}
                <div className="relative flex justify-center w-1/3 pt-36">
                <h3 className="text-xl font-serif">Visit Me</h3>
                </div>
                <div className="relative flex justify-evenly w-1/3 pt-6 h-full">
                    <SocialIcon url="https://www.linkedin.com/in/sebastian-soegaard-larsen/" className="" target="_blank" fgColor="#fff" style={{ width: 50, height: 50 }} />
                    <SocialIcon url="https://github.com/SSLITU" className="" target="_blank" fgColor="#fff" style={{ width: 50, height: 50 }} />
                </div>
            </div>
            </div>
        </main>
    );
};

export default Home;