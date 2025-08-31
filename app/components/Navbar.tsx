"use client"

import Link from "next/link";
import ButtonLinkPrimary from './ButtonPrimary';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="px-5 lg:px-10 xl:px-20 py-5 shadow-md relative z-50 bg-white">
            <nav className="flex justify-between items-center gap-5">
                {/* Left: Logo & Menu */}
                <div className="flex items-center gap-5">
                    <Link href="/" className="text-xl font-bold">Yhoiki</Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/freelance">Freelance</Link></li>
                        <li><Link href="/course">Course</Link></li>
                        <li><Link href="/program">Program</Link></li>
                    </ul>
                </div>

                {/* Right: Search, Lang, Login/Register, Hamburger */}
                <div className="flex items-center gap-5">
                    <input
                        type="search"
                        className="bg-gray-200 px-5 py-2 rounded-full text-sm hidden md:block"
                        placeholder="Search"
                    />
                    <p className="hidden md:block">ENG</p>

                    {/* Desktop Login/Register */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ButtonLinkPrimary>
                            <Link href="/login">Login</Link>
                        </ButtonLinkPrimary>
                        <ButtonLinkPrimary>
                            <Link href="/register">Register</Link>
                        </ButtonLinkPrimary>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {navbar && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t mt-4 p-5 space-y-5 shadow-md">
                    <ul className="space-y-3">
                        <li><Link href="/" onClick={() => setNavbar(false)}>Home</Link></li>
                        <li><Link href="/freelance" onClick={() => setNavbar(false)}>Freelance</Link></li>
                        <li><Link href="/course" onClick={() => setNavbar(false)}>Course</Link></li>
                        <li><Link href="/program" onClick={() => setNavbar(false)}>Program</Link></li>
                    </ul>
                    <div className="flex flex-col gap-3 pt-3 border-t">
                        <ButtonLinkPrimary>
                            <Link href="/login" onClick={() => setNavbar(false)}>Login</Link>
                        </ButtonLinkPrimary>
                        <ButtonLinkPrimary>
                            <Link href="/register" onClick={() => setNavbar(false)}>Register</Link>
                        </ButtonLinkPrimary>
                    </div>
                </div>
            )}
        </header>
    );
}
