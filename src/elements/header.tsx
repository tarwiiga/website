'use client'
import {useState} from 'react';
import {theme} from "@/utils/theme";
import {info} from "@/utils/info";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white p-10 fixed w-full top-0 z-10">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={"/logo.svg"}
                        alt="Logo"
                        className={`w-12 h-12 bg-[${theme.light_green}] border border-[${theme.dark_green}] rounded-xl mr-2`}
                        style={{width: '45px', height: '45px', borderRadius: '10px'}}
                    />
                    <span className="text-xl font-bold">Tarwiiga</span>
                </div>
                <div className="hidden md:block">
                    <a
                        href={info.request_access_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-[#CBFFD6] text-[#3A4B40] px-6 py-3 border border-[#3A4B40] rounded-md text-center transition duration-300`}
                    >
                        Request Access
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-black hover:text-black focus:outline-none focus:text-black"
                        onClick={toggleMenu}
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-start space-y-4 mt-4">
                    <a
                        href={info.request_access_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-[#CBFFD6] text-[#3A4B40] px-6 py-3 border border-[#3A4B40] rounded-md text-center transition duration-300`}
                    >
                        Request Access
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
