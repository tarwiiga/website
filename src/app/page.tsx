import {info} from "@/utils/info";

export default function Home() {
    return (
        <div className="container mx-auto p-8">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-6 mt-[100px] md:mt-[150px]">{info.headline1}</h1>
                <h2 className="text-4xl font-bold mb-6">{info.headline2}</h2>
                <p className="text-base mb-1">{info.description1}</p>
                <p className="text-base mb-7">{info.description2}</p>
                <a
                    href={info.request_access_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#CBFFD6] text-[#3A4B40] px-6 py-3 border border-[#3A4B40] rounded-md text-center transition duration-300`}
                >
                    Request Access
                </a>
                <div className="container mx-auto p-4 my-[30px]">
                    <div className={"max-w-lg mx-auto"}>
                        <div className="relative overflow-hidden pt-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full border border-[#3A4B40] rounded-md"
                                src="https://www.youtube.com/embed/iskWq2eU7T0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
