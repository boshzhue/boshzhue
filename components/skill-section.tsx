// components/skills-section.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Paintbrush, Lightbulb, Database } from "lucide-react";

export function SkillsSection() {
    const [activeTab, setActiveTab] = useState("frontend");

    const skills = {
        frontend: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "Tailwind CSS", level: 90 },
            { name: "HTML/CSS", level: 95 },
        ],
        backend: [
            { name: "Node.js", level: 80 },
            { name: "Express", level: 75 },
            { name: "MongoDB", level: 70 },
            { name: "PostgreSQL", level: 65 },
            { name: "REST API", level: 85 },
        ],
        design: [
            { name: "UI/UX Design", level: 80 },
            { name: "Figma", level: 85 },
            { name: "Adobe XD", level: 70 },
            { name: "Responsive Design", level: 90 },
            { name: "Design Systems", level: 75 },
        ],
        other: [
            { name: "Git/GitHub", level: 85 },
            { name: "CI/CD", level: 70 },
            { name: "Testing", level: 65 },
            { name: "Performance Optimization", level: 75 },
            { name: "JAMstack", level: 80 },
        ],
    };

    return (
        <section id="skills" className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">My Skills</h2>

                <Card className="futuristic-border p-6">
                    <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid grid-cols-4 mb-8">
                            <TabsTrigger value="frontend" className="flex items-center gap-2">
                                <Code className="h-4 w-4" />
                                <span className="hidden sm:inline">Frontend</span>
                            </TabsTrigger>
                            <TabsTrigger value="backend" className="flex items-center gap-2">
                                <Database className="h-4 w-4" />
                                <span className="hidden sm:inline">Backend</span>
                            </TabsTrigger>
                            <TabsTrigger value="design" className="flex items-center gap-2">
                                <Paintbrush className="h-4 w-4" />
                                <span className="hidden sm:inline">Design</span>
                            </TabsTrigger>
                            <TabsTrigger value="other" className="flex items-center gap-2">
                                <Lightbulb className="h-4 w-4" />
                                <span className="hidden sm:inline">Other</span>
                            </TabsTrigger>
                        </TabsList>

                        {Object.entries(skills).map(([category, categorySkills]) => (
                            <TabsContent key={category} value={category} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {categorySkills.map((skill) => (
                                        <div key={skill.name} className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-gradient rounded-full" style={{ width: `${skill.level}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </Card>
            </div>
        </section>
    );
}
