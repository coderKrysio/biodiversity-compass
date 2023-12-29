import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Issues } from "@/components/issues";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#b1c8c3] text-[#182f2a] overflow-hidden">
			<Navbar />
			<Hero />
			<About />
			<Issues />
        </main>
    );
}
