import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    const timeline = [
        {
            year: "2023 - Present",
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            description: "Leading development of modern web applications using Next.js and React. Implemented design systems that improved development efficiency by 40%.",
        },
        {
            year: "2021 - 2023",
            title: "Frontend Developer",
            company: "Digital Solutions Ltd.",
            description: "Developed responsive UIs and interactive components using React. Collaborated with design team to implement pixel-perfect interfaces.",
        },
        {
            year: "2019 - 2021",
            title: "Web Developer",
            company: "Creative Minds Agency",
            description: "Created websites and web applications for various clients. Focused on performance optimization and accessibility.",
        },
        {
            year: "2016 - 2019",
            title: "Computer Science Degree",
            company: "University of Technology",
            description: "Bachelor's degree in Computer Science with focus on web technologies and software engineering.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-background bg-grid-pattern">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
            <Header />

            <main className="container relative z-10 px-4 pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h1>

                    {/* Profile Section */}
                    <section className="mb-16">
                        <Card className="glass-panel futuristic-border overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                    <div className="md:col-span-5 p-6 md:p-8 flex items-center justify-center">
                                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30">
                                            <Image src="/api/placeholder/400/400" alt="Profile" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold mb-4">Your Name</h2>
                                        <p className="text-xl text-muted-foreground mb-6">Software Developer & UI/UX Designer</p>
                                        <div className="space-y-4 text-lg">
                                            <p>
                                                I&apos;m a passionate software developer with expertise in building modern, responsive web applications. With over 5 years of experience in the industry, I specialize in creating user-friendly
                                                interfaces that deliver exceptional user experiences.
                                            </p>
                                            <p>My approach combines technical excellence with creative problem-solving, allowing me to tackle complex challenges and transform ideas into elegant solutions.</p>
                                        </div>
                                        <div className="mt-6 flex flex-wrap gap-4">
                                            <Button asChild>
                                                <Link href="/contact">
                                                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="outline" asChild>
                                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                                    Download Resume
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Experience Timeline */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 gradient-text">Experience & Education</h2>
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <Card key={index} className="relative futuristic-border overflow-hidden hover:shadow-md transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            <div className="md:w-1/4">
                                                <span className="text-primary font-medium">{item.year}</span>
                                            </div>
                                            <div className="md:w-3/4">
                                                <h3 className="text-xl font-bold">{item.title}</h3>
                                                <p className="text-muted-foreground mb-2">{item.company}</p>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 gradient-text">My Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="glass-panel futuristic-border">
                                <CardContent className="p-6 text-center">
                                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">💡</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                                    <p>I constantly seek new approaches and technologies to solve problems more effectively.</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel futuristic-border">
                                <CardContent className="p-6 text-center">
                                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                                    <p>I believe the best results come from working together with diverse teams and perspectives.</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel futuristic-border">
                                <CardContent className="p-6 text-center">
                                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🔄</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                                    <p>I&apos;m dedicated to constantly improving my skills and staying updated with the latest developments.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section>
                        <Card className="bg-blue-gradient text-white futuristic-border">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
                                <p className="text-lg max-w-2xl mx-auto mb-6">I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s create something amazing together!</p>
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                                    <Link href="/contact">Get In Touch</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
