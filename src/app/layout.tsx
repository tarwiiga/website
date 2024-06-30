import type {Metadata} from "next";
import React from "react";
import {Noto_Sans} from "next/font/google";
import "../styles/globals.css";
import Header from "@/elements/header";
import Footer from "@/elements/footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


const noto_sans = Noto_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Tarwiiga",
    description: "Empowering Google Ads with LLMs and GenAI",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="100x100"/>
        </head>
        <body className={noto_sans.className}>
        <GoogleTagManager gtmId={`GTM-TZC51Y9RMG`} />
        <Header/>
        {children}
        <Footer/>
        <GoogleAnalytics gaId={`G-PNL9WS34`} />
        </body>
        </html>
    );
}
