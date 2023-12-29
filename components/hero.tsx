"use client";
import { Leaf } from "lucide-react";
import { AttentionSeeker, Bounce, Fade } from "react-awesome-reveal";

export const Hero = () => {
    return (
        <section className="w-full h-screen p-6 mt-[70px] flex flex-col items-end hero">
            <div className="text-5xl font-bold w-full pl-[100px] max-[1380px]:pl-[50px] max-[1330px]:pl-0 max-[680px]:text-4xl">
                The
            </div>
            <h1 className="text-[200px] text-right leading-[0.9] font-[900] max-[1325px]:text-[156px] max-[1050px]:text-9xl max-[870px]:text-8xl max-[620px]:text-7xl max-[470px]:text-6xl max-[400px]:text-5xl">
                Biodiversity compass
            </h1>

            <Bounce className="absolute left-[-30px] top-[350px] opacity-75 z-[1] max-[870px]:top-[400px] max-[680px]:top-[450px] max-[500px]:left-0">
                <Leaf
                    width={250}
                    height={250}
                    strokeWidth={0.8}
                    color="#3d776b"
                    fill="#b1c8c3"
                    className="transform -scale-x-100 rotate-[60deg] max-[1110px]:w-[200px] max-[1110px]:h-[200px] max-[1050px]:w-[150px] max-[1050px]:h-[150px] max-[500px]:w-[100px] max-[500px]:h-[100px]"
                />
            </Bounce>

            <Bounce
                delay={300}
                className="absolute left-[-30px] top-[350px] opacity-75 max-[870px]:top-[400px] max-[680px]:top-[450px] max-[500px]:left-[-60px]"
            >
                <Leaf
                    width={425}
                    height={425}
                    strokeWidth={0.6}
                    color="#3d776b"
                    className="max-[1110px]:w-[375px] max-[1110px]:h-[375px] max-[1050px]:w-[325px] max-[1050px]:h-[325px] max-[500px]:[275px] max-[500px]:h-[275px]"
                />
            </Bounce>
            <div className="mt-14 w-full flex flex-col items-end gap-4 max-[870px]:mt-8">
                <p className="text-2xl text-right text-[#182f2a] font-medium max-[870px]:text-xl">
                    Explore, educate, regenerate -<br />
                    your roadmap to a flourishing future.
                </p>
                <AttentionSeeker delay={700} effect="flash">
                    <button className="py-3 px-7 border-[3px] border-[#182f2a] text-[#182f2a] text-xl font-medium tracking-wide rounded-xl hover:bg-[#182f2a] hover:text-[#b1c8c3] transition-colors max-[870px]:text-lg max-[870px]:py-2">
                        Lets take Action
                    </button>
                </AttentionSeeker>
            </div>
        </section>
    );
};
