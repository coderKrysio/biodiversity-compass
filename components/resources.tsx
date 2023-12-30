"use client";
import { Fade, Slide } from "react-awesome-reveal";

export const Resources = () => {
    return (
        <section
            id="resources"
            className="w-full min-h-screen p-6 pt-[100px] flex flex-col justify-center gap-[50px]"
        >
            <div className="w-full relative flex items-end justify-start gap-16 max-[450px]:gap-10">
                <Slide className="text-5xl font-semibold flex items-center max-[450px]:text-4xl select-none">
                    Resources
                </Slide>
                <Fade className="w-full h-full mb-3">
                    <div className="border-b-[12px] border-dotted border-[#182f2a] max-[450px]:border-b-[8px]" />
                </Fade>
            </div>

            <div className="flex flex-row items-center justify-center gap-10 max-[880px]:flex-wrap">
                <Fade cascade damping={0.1} className="w-full">
                    <div className="w-full h-[300px] rounded-xl">
                        <iframe
                            className="w-full h-full rounded-xl border-none"
                            src="https://www.youtube.com/embed/QQYgCxu988s?si=gzLpQEzXzQv8fANm"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full h-[300px] rounded-xl">
                        <iframe
                            className="w-full h-full rounded-xl border-none"
                            src="https://www.youtube.com/embed/WKld7o6CISg?si=DCVDHFMgXIv5scun"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Fade>
            </div>

            <div className="flex flex-row items-center justify-center gap-10 max-[880px]:flex-wrap">
                <Fade cascade damping={0.1} className="w-full">
                    <div className="w-full h-[300px] rounded-xl">
                        <iframe
                            className="w-full h-full rounded-xl border-none"
                            src="https://www.youtube.com/embed/GK_vRtHJZu4?si=-kxu_U5DdYJEozP1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full h-[300px] rounded-xl">
                        <iframe
                            className="w-full h-full rounded-xl border-none"
                            src="https://www.youtube.com/embed/KM0EZP5ijbA?si=5LuMos_wuybFZ-2j"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    );
};
