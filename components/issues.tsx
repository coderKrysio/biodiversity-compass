"use client";
import { Rubik_Dirt } from "next/font/google";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const rubikDirt = Rubik_Dirt({
    subsets: [],
    weight: "400",
});

export const Issues = () => {
    return (
        <section className="w-full min-h-screen p-6 mt-[70px] flex flex-col items-items justify-center gap-[60px]">
            <div>
                <Fade
                    cascade
                    damping={0.2}
                    className="text-7xl text-center font-bold max-[1130px]:text-6xl max-[950px]:text-5xl max-[765px]:text-4xl"
                >
                    <p>We're not just facing</p>
                    <p>
                        <span
                            className={`text-[#5C4033] font-extrabold ${rubikDirt.className}`}
                        >
                            degradation
                        </span>{" "}
                        we are facing the
                    </p>
                    <p>extinction of dreams</p>
                </Fade>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-[30px] p-3">
                <Slide direction="left" duration={500}>
                    <div className="h-[450px] w-[350px] bg-[#2a534a] text-[#b1c8c3] rounded-xl shadow-xl font-medium flex flex-col items-center justify-center max-[400px]:w-auto">
                        <div className="h-full overflow-hidden rounded-t-xl">
                            <img
                                src="/images/issues-img3.jpg"
                                className="w-full"
                            />
                        </div>
                        <p className="p-4 h-full text-xl">
                            Globally, one fifth of the Earth's land area (more
                            than <span className="text-3xl font-bold text-white">2</span>{" "}
                            billion hectares) are degraded, an area nearly the
                            size of India
                        </p>
                    </div>
                </Slide>

                <Zoom
                    duration={500}
                    className="w-auto flex items-center justify-center max-[720px]:w-full"
                >
                    <div className="h-[450px] w-[650px] rounded-xl shadow-xl font-medium overflow-hidden max-[720px]:w-full">
                        <iframe
                            src="https://ourworldindata.org/grapher/number-species-threatened"
                            loading="lazy"
                            className="w-full h-full border-none"
                        ></iframe>
                    </div>
                </Zoom>

                <Slide direction="right" duration={500}>
                    <div className="h-[450px] w-[350px] bg-[#2a534a] text-[#b1c8c3] rounded-xl shadow-xl text-2xl font-medium flex flex-col items-center justify-center max-[400px]:w-auto">
                        <div className="h-full overflow-hidden rounded-t-xl flex items-center">
                            <img
                                src="/images/issues-img4.jpg"
                                className="w-full"
                            />
                        </div>
                        <p className="p-4 h-full text-xl">
                            Land degradation is undermining the well-being of
                            some{" "}
                            <span className="text-3xl font-bold text-white">3.2 </span>
                            billion people, driving species to extinction and
                            intensifying climate change
                        </p>
                    </div>
                </Slide>
            </div>
        </section>
    );
};
