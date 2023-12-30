import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Issues } from "@/components/issues";
import { ListingIssues } from "@/components/lisiting-issues";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#b1c8c3] text-[#182f2a] overflow-hidden">
			<Navbar />
			<Hero />
			<About />
			<Issues />
            <ListingIssues />
            {/* <Services /> */}
        </main>
    );
}
