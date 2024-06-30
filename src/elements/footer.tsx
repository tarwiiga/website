import {theme} from "@/utils/theme";
import {info} from "@/utils/info";

const Footer = () => {
    return (
        <footer className={`bg-[${theme.light_green}] text-[${theme.dark_green}] fixed w-full bottom-0 z-10`}>
            <div className="container mx-auto p-3 flex justify-between items-center">
                <span className="">Tarwiiga © 2024</span>
                <div className="flex space-x-4 items-center">
                    <span className="">Follow |</span>
                    <a href={info.x_url} target="_blank">
                        <svg className={`h-6 w-6 text-[${theme.dark_green}]`} width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                        </svg>
                    </a>
                    <a href={info.linkedin_url} target="_blank">
                        <svg className={`h-6 w-6 text-[${theme.dark_green}]`} viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href={info.youtube_url} target="_blank">
                        <svg className={`h-6 w-6 text-[${theme.dark_green}]`} viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

