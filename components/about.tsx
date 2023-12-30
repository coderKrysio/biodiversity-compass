"use client";
import { Globe2, LeafyGreen } from "lucide-react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

export const About = () => {
    return (
        <section
            id="about-us"
            className="w-full min-h-screen p-6 pt-[100px] flex flex-col items-items justify-center about"
        >
            <div className="text-7xl text-[#fff] font-bold text-center flex items-center justify-center ml-[175px] mb-8 z-[1] max-[540px]:ml-[100px] max-[470px]:ml-[30px] max-[400px]:ml-0">
                <div className="absolute left-[-100px] w-1/2 h-4 bg-[#779f97] rounded-r-xl max-[540px]:left-[-150px]" />
                <Bounce triggerOnce className="text-center w-full select-none">
                    About Us
                </Bounce>
            </div>
            <div className="relative w-full flex items-center justify-start pb-6 bg-[#b1c8c3] bg-opacity-60 my-16 rounded-2xl">
                <div className="w-[650px] h-full relative text-2xl font-semibold flex items-center p-8 pl-14 z-[1] max-[1220px]:pl-8 max-[1170px]:w-[550px] max-[1070px]:w-auto max-[550px]:p-4 select-none">
                    <Slide triggerOnce>
                        <p>
                            Verdant landscapes. Birdsong in lush rainforests.
                            Shimmering coral reefs. Fertile fields nourishing
                            communities. This thriving future, Biodiversity
                            Compass charts the course.
                            <br /> <br />
                            Empowering movement, not just a company. We equip
                            individuals, farmers, and policymakers with
                            practical solutions to land degradation and
                            biodiversity loss. Community gardens to protected
                            areas, we guide every step of the way.
                        </p>
                    </Slide>
                    <div className="absolute right-[-72px] bottom-0 flex gap-3 max-[1360px]:right-[42px]">
                        <LeafyGreen
                            width={30}
                            height={30}
                            strokeWidth={1}
                            className="-rotate-45"
                        />
                        <LeafyGreen
                            width={30}
                            height={30}
                            strokeWidth={1}
                            className="-rotate-45"
                        />
                    </div>
                </div>
                <Fade
                    triggerOnce
                    className="absolute right-[15%] top-[-1/2] max-[1070px]:hidden"
                >
                    <div className="w-fit h-[550px] p-4 bg-[#3d776b] shadow-xl shadow-[#182f2a] rounded-2xl flex items-center justify-center max-[1220px]:h-[525px]">
                        <img
                            src="/images/about-bg.jpg"
                            className="h-full rounded-xl max-[1070px]:w-full max-[1070px]:h-auto"
                        />
                    </div>
                </Fade>
                <Slide
                    triggerOnce
                    direction="left"
                    className="absolute right-[-80px] z-[1] max-[1070px]:hidden"
                >
                    <Globe2
                        width={400}
                        height={400}
                        color="#3d776b"
                        strokeWidth={0.6}
                        className=""
                    />
                </Slide>
            </div>
        </section>
    );
};
