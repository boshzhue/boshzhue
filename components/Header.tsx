// components/header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-background/80 backdrop-blur-lg shadow-md" : "py-4 bg-transparent"}`}>
            <div className="container flex items-center justify-between">
                <Link href="/" className="text-xl font-bold gradient-text">
                    Boshzhue
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className={`transition-colors hover:text-primary ${pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"}`}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                    <Button asChild>
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden space-x-4">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md">
                    <nav className="container py-6 flex flex-col space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-lg px-4 py-2 transition-colors hover:text-primary ${pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="mt-4">
                            <Link href="/contact">Get In Touch</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
