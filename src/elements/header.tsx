'use client'
import {theme} from "@/utils/theme";

const Header = () => {
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
            </div>
        </header>
    );
};

export default Header;
