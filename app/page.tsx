import { Metadata } from "next";
import Link from "next/link";
import { FaChevronRight, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Particles from "@/components/particles";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skill-section";

export const metadata: Metadata = {
    title: "Boshzhue - Modern Futuristic Portfolio",
    description: "Software developer and designer with a passion for creating innovative digital experiences",
};

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 z-0"></div>
            <Particles className="absolute inset-0 z-0" />

            <Header />

            <main className="container relative z-10 px-4 pt-16 md:pt-24">
                <section className="py-12 md:py-20 flex flex-col items-center text-center">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Boshzhue</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-6">Software Developer & Designer</p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Building modern, futuristic digital experiences with a focus on innovation, usability, and performance.</p>
                        <div className="flex justify-center gap-4 pt-8">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/projects">
                                    View Projects <FaArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full">
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
                        <div className="flex justify-center gap-6 mt-8">
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                            <Link href="mailto:your-email@example.com">
                                <FaEnvelope className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="about" className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Me</h2>
                        <div className="glass-panel p-6 md:p-8 futuristic-border">
                            <p className="text-lg mb-4">
                                Hello! I&apos;m a passionate software developer specializing in building modern web applications. With expertise in React, Next.js, and TypeScript, I create elegant, user-friendly solutions to complex
                                problems.
                            </p>
                            <p className="text-lg mb-4">My approach combines technical excellence with creative design thinking, allowing me to deliver applications that are not just functional, but delightful to use.</p>
                            <p className="text-lg">When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
                            <div className="mt-8">
                                <Button variant="outline" className="rounded-full" asChild>
                                    <Link href="/about">
                                        Learn More <FaChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <SkillsSection />

                <section id="projects" className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard
                                title="Project Alpha"
                                description="A next-generation web application with real-time data visualization and AI-powered insights."
                                tags={["Next.js", "TypeScript", "AI", "Real-time"]}
                                image="/api/placeholder/600/400"
                                link="/projects/alpha"
                            />
                            <ProjectCard
                                title="Project Beta"
                                description="Redesigned e-commerce platform with improved UX, resulting in 45% increase in conversion rates."
                                tags={["React", "Node.js", "E-commerce", "UX/UI"]}
                                image="/api/placeholder/600/400"
                                link="/projects/beta"
                            />
                        </div>
                        <div className="mt-12 text-center">
                            <Button asChild>
                                <Link href="/projects">
                                    View All Projects <FaArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
                        <Card className="futuristic-border overflow-hidden">
                            <CardContent className="p-8">
                                <p className="text-lg mb-6">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                                    <Button asChild size="lg" className="w-full md:w-auto">
                                        <Link href="mailto:your-email@example.com">
                                            <FaEnvelope className="mr-2 h-4 w-4" />
                                            Email Me
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild size="lg" className="w-full md:w-auto">
                                        <Link href="/contact">Contact Form</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
