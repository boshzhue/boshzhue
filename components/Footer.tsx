import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Ganti ikon

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 mt-12 bg-background/90 backdrop-blur-md border-t border-border relative z-10">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="text-xl font-bold gradient-text">
                            YourName
                        </Link>
                        <p className="text-muted-foreground mt-2 max-w-md">Building the future through innovative design and development.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-medium text-lg mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-lg mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                        Contact Form
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:your-email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        Email
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h3 className="font-medium text-lg mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                                </Link>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                                </Link>
                                <Link href="mailto:your-email@example.com">
                                    <FaEnvelope className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 mt-8">
                <p className="text-center text-muted-foreground text-sm">© {currentYear} YourName. All rights reserved.</p>
            </div>
        </footer>
    );
}
