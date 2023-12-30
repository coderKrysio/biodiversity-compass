"use client";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-screen h-[55px] flex items-center justify-between px-8 bg-[#bbcfcb] z-[10] max-[680px]:px-6">
            <Link
                href={"/"}
                className="flex text-2xl font-semibold gap-2 select-none"
            >
                <img src="/images/logo.png" width={30} height={30} />
                Bio Compass
            </Link>
            <div className="flex items-center justify-end gap-1 h-full max-[680px]:hidden select-none">
                <Link
                    href={"#about-us"}
                    className="h-full mr-3 w-[85px] border-b-[4px] border-transparent text-lg flex items-center justify-center transition-colors hover:font-medium hover:border-[#182f2a]"
                >
                    About
                </Link>
                <Link
                    href={"#issues"}
                    className="h-full mr-3 w-[85px] border-b-[4px] border-transparent text-lg flex items-center justify-center transition-colors hover:font-medium hover:border-[#182f2a]"
                >
                    Issues
                </Link>
                <Link
                    href={"#actions"}
                    className="h-full mr-3 w-[85px] border-b-[4px] border-transparent text-lg flex items-center justify-center transition-colors hover:font-medium hover:border-[#182f2a]"
                >
                    Actions
                </Link>
                <Link
                    href={"#resources"}
                    className="h-full mr-3 w-[85px] border-b-[4px] border-transparent text-lg flex items-center justify-center transition-colors hover:font-medium hover:border-[#182f2a]"
                >
                    Resources
                </Link>
            </div>

            <div className="min-[680px]:hidden">
                <MoreVertical
                    width={30}
                    height={30}
                    color="#182f2a"
                    onClick={() => setOpenMenu((prev) => !prev)}
                />
                {openMenu && (
                    <Fade duration={300}>
                        <div className="absolute right-0 flex flex-col items-center justify-center m-4 rounded-xl text-xl font-medium gap-4 p-4 bg-[#3d776b] select-none">
                            <Link href={"#actions"}>About</Link>
                            <Link href={"#issues"}>Issues</Link>
                            <Link href={"#actions"}>Actions</Link>
                            <Link href={"#resources"}>Resources</Link>
                        </div>
                    </Fade>
                )}
            </div>
        </nav>
    );
};
