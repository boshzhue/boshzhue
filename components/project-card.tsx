// components/project-card.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 futuristic-border">
            <Link href={link} className="block">
                <div className="overflow-hidden relative">
                    <div className="aspect-video relative overflow-hidden">
                        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
