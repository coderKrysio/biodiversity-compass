"use client";
import { HeartHandshake, HelpingHand, Home, Speech } from "lucide-react";
import Link from "next/link";
import { AttentionSeeker, Bounce, Fade, Zoom } from "react-awesome-reveal";
import { Black_Ops_One } from "next/font/google";
const blackoops = Black_Ops_One({
    weight: ["400"],
    subsets: ["latin"],
});

export const Actions = () => {
    return (
        <section
            id="actions"
            className="w-full min-h-screen p-6 pt-[100px] flex flex-col justify-center gap-[50px]"
        >
            <div className="flex items-center justify-center flex-col w-full gap-5">
                <div className="text-right text-6xl font-medium w-full flex flex-col items-end justify-end select-none max-[500px]:text-5xl">
                    <Bounce cascade damping={0.15} className="w-fit">
                        <p>
                            Join us in the{" "}
                            <span
                                className={`${blackoops.className} font-[600] text-[#852323]`}
                            >
                                fight
                            </span>
                        </p>
                        <p>for the environment</p>
                    </Bounce>
                </div>

                <div className="flex items-center justify-center relative w-full h-[400px] rounded-2xl actions--banner mt-5 mb-[200px] max-[775px]:mb-20 max-[590px]:h-[300px]">
                    <div className="absolute bottom-[-150px] left-0 ml-5 flex gap-5 max-[950px]:bottom-[-100px] max-[775px]:hidden">
                        <AttentionSeeker effect="bounce" damping={0.1} cascade>
                            <p className="text-3xl h-fit font-semibold bg-[#20b2aa] text-[#0B504F] max-w-[300px] p-4 rounded-xl max-[950px]:text-2xl">
                                Over 3,000 species are threatened with
                                extinction
                            </p>
                            <p className="text-xl h-fit font-semibold bg-[#20b2aa] text-[#0B504F] max-w-[300px] p-2 rounded-xl max-[950px]:text-lg">
                                with
                            </p>
                            <p className="text-3xl h-fit font-semibold bg-[#20b2aa] text-[#0B504F] max-w-[300px] p-4 rounded-xl max-[950px]:text-2xl">
                                27% of over 116,000 assessed species in the IUCN
                                Red List
                            </p>
                        </AttentionSeeker>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-32">
                <Zoom cascade damping={0.1} triggerOnce>
                    <Link
                        target="_blank"
                        href={
                            "https://www.economist.com/technology-quarterly/2021/06/15/how-volunteer-observers-can-help-protect-biodiversity"
                        }
                        className="w-[350px] h-[350px] bg-[#182f2a] text-[#779f97] rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center hover:bg-[#3d776b] hover:text-[#182f2a] transition-colors select-none max-[400px]:w-full"
                    >
                        <p className="text-5xl font-bold flex flex-col items-center justify-center text-center">
                            Volunteer
                            <span className="mt-1 text-sm font-medium leading-tight">
                                Join local conservation projects, be a hands-on
                                force for change, and help recover biodiversity
                                through active volunteer engagement.
                            </span>
                        </p>
                        <HelpingHand
                            width={200}
                            height={200}
                            strokeWidth={0.9}
                        />
                        <span className="font-semibold">
                            Click to read more
                        </span>
                    </Link>
                    <Link
                        target="_blank"
                        href={
                            "https://www.sciencedirect.com/science/article/abs/pii/S0921344922004438"
                        }
                        className="w-[350px] h-[350px] bg-[#182f2a] text-[#779f97] rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center hover:bg-[#3d776b] hover:text-[#182f2a] transition-colors select-none max-[400px]:w-full"
                    >
                        <p className="text-5xl font-bold flex flex-col items-center justify-center text-center">
                            Donations
                            <span className="mt-1 text-sm font-medium leading-tight">
                                Contribute to biodiversity by supporting
                                donations, funding essential conservation
                                initiatives, and making a impact on preserving
                                ecosystems.
                            </span>
                        </p>
                        <HeartHandshake
                            width={200}
                            height={200}
                            strokeWidth={0.9}
                        />
                        <span className="font-semibold">
                            Click to read more
                        </span>
                    </Link>
                    <Link
                        target="_blank"
                        href={
                            "https://royalsociety.org/topics-policy/projects/biodiversity/how-can-you-protect-biodiversity/"
                        }
                        className="w-[350px] h-[350px] bg-[#182f2a] text-[#779f97] rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center hover:bg-[#3d776b] hover:text-[#182f2a] transition-colors select-none max-[400px]:w-full"
                    >
                        <p className="text-5xl font-bold flex flex-col items-center justify-center text-center">
                            At Home
                            <span className="mt-1 text-sm font-medium leading-tight">
                                Foster biodiversity recovery from your own
                                doorstep by adopting eco-friendly habits at home
                                by embracing sustainable practices.
                            </span>
                        </p>
                        <Home width={200} height={200} strokeWidth={0.9} />
                        <span className="font-semibold">
                            Click to read more
                        </span>
                    </Link>
                    <Link
                        target="_blank"
                        href={
                            "https://india.mongabay.com/2020/12/bringing-biodiversity-and-conservation-to-the-forefront-in-india/"
                        }
                        className="w-[350px] h-[350px] bg-[#182f2a] text-[#779f97] rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center hover:bg-[#3d776b] hover:text-[#182f2a] transition-colors select-none max-[400px]:w-full"
                    >
                        <p className="text-5xl font-bold flex flex-col items-center justify-center text-center">
                            Campaigns
                            <span className="mt-1 text-sm font-medium leading-tight">
                                Be a part of the solution — join biodiversity
                                advocacy campaigns, raise awareness, and drive
                                change.
                            </span>
                        </p>
                        <Speech width={200} height={200} strokeWidth={0.9} />
                        <span className="font-semibold">
                            Click to read more
                        </span>
                    </Link>
                </Zoom>
            </div>
        </section>
    );
};
