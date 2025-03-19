// app/projects/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
    title: "Projects - Your Name",
    description: "Showcase of my recent work and projects",
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "Project Alpha",
            description: "A next-generation web application with real-time data visualization and AI-powered insights.",
            tags: ["Next.js", "TypeScript", "AI", "Real-time"],
            image: "/api/placeholder/600/400",
            link: "/projects/alpha",
        },
        {
            title: "Project Beta",
            description: "Redesigned e-commerce platform with improved UX, resulting in 45% increase in conversion rates.",
            tags: ["React", "Node.js", "E-commerce", "UX/UI"],
            image: "/api/placeholder/600/400",
            link: "/projects/beta",
        },
        {
            title: "Project Gamma",
            description: "Mobile-first web application for fitness tracking with personalized workout plans.",
            tags: ["React Native", "Firebase", "Health API"],
            image: "/api/placeholder/600/400",
            link: "/projects/gamma",
        },
        {
            title: "Project Delta",
            description: "Interactive dashboard for financial data analysis with complex filtering capabilities.",
            tags: ["D3.js", "React", "Finance API"],
            image: "/api/placeholder/600/400",
            link: "/projects/delta",
        },
        {
            title: "Project Epsilon",
            description: "Content management system built for scalability and performance.",
            tags: ["Next.js", "GraphQL", "PostgreSQL"],
            image: "/api/placeholder/600/400",
            link: "/projects/epsilon",
        },
        {
            title: "Project Zeta",
            description: "Social platform connecting mentors and mentees in the tech industry.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "/api/placeholder/600/400",
            link: "/projects/zeta",
        },
    ];

    return (
        <div className="relative min-h-screen bg-background">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 z-0"></div>
            <Header />

            <main className="container relative z-10 px-4 pt-32 pb-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">My Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mb-12">A showcase of my recent work, personal projects, and collaborations. Each project represents a unique challenge and solution.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} title={project.title} description={project.description} tags={project.tags} image={project.image} link={project.link} />
                        ))}
                    </div>

                    {/* Collaboration CTA */}
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">I'm always looking for new and exciting projects to work on. Let's bring your ideas to life!</p>
                        <a href="/contact" className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
