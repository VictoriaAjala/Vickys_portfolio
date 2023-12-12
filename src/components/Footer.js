import React from "react";
import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg py-5
        ">
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-ceter">
                Build With <span className="text-primary text-2x1 px-1">&#9825;</span>
                by&nbsp;<Link href="/" target={"_blank"} 
                className="underline underline-offset-2">Vicky</Link>
                </div>
            <Link href="/" target={"_blank"} className="underline underline-offset-2">Say Hello</Link>

        </Layout>
    </footer>
    )
}

export default Footer