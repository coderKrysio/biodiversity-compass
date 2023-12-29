import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
    title: "Biodiversity Compass",
    description: "From echoes to action: Dive into the stories, ignite solutions, leave a legacy of thriving land and biodiversity",
	keywords: ["biodiversity", "biodiversity compass", "environmental sustainability"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
