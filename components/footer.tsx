"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { AttentionSeeker } from "react-awesome-reveal";

export const Footer = () => {
    return (
        <footer className="w-full p-6 mt-[70px] flex flex-col items-center justify-center gap-[50px] bg-[#182f2a] text-[#b1c8c3]">
            <div className="flex items-center justify-center gap-[50px] w-full max-[730px]:flex-col">
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <Link
                        href={"/"}
                        className="flex flex-col items-center justify-center text-5xl font-bold gap-2 select-none"
                    >
                        <AttentionSeeker effect="wobble">
                            <img
                                src="/images/logo.png"
                                width={90}
                                height={90}
                            />
                        </AttentionSeeker>
                        Bio Compass
                    </Link>

                    <p className="font-medium">
                        biodiversity-compass.vercel.app
                    </p>
                </div>

                <div className="w-full text-xl font-medium flex flex-col items-end justify-end pr-10 pt-10 max-[730px]:pt-0 max-[730px]:pr-0 max-[730px]:items-center">
                    <p className="text-2xl mb-3">Reference</p>
                    <Link href={"#about"} className="hover:text-white">
                        About
                    </Link>
                    <Link href={"#issues"} className="hover:text-white">
                        Issues
                    </Link>
                    <Link href={"#actions"} className="hover:text-white">
                        Actions
                    </Link>
                    <Link href={"#resources"} className="hover:text-white">
                        Resources
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 select-none">
                <Link
                    target="_blank"
                    href={"https://github.com/coderKrysio/biodiversity-compass"}
                    className="flex flex-col items-center"
                >
                    <Github width={30} height={30} fill="#b1c8c3" />
                    Repo Link
                </Link>
                <p className="text-lg text-center">
                    Made with ❤️ by coderKrysio
                </p>
                <span>© All rights reserved</span>
            </div>
        </footer>
    );
};
