import type {Metadata} from "next";
import React from "react";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import Header from "@/elements/header";
import Footer from "@/elements/footer";

const inter = Inter({subsets: ["latin"]});

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
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
