import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"

import pokerpro from "../app/pokerpro4.png"
import uikeyboard from "../app/uikeyboard.png"
import sudofast from "../app/sudofast.svg"
import bobamap from "../app/bobamap.png"

export function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Projects</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <ProjectCard
          title="PokerPro"
          description="A self-learning poker chatbot ♠"
          image={pokerpro}
          tags={["Next.js", "Python", "Flask", "Supabase"]}
          demoUrl="#"
          repoUrl="#"
        />

        <ProjectCard
          title="UI Keyboard"
          description="ASMR Typing"
          image={uikeyboard}
          tags={["HTML", "CSS", "Javascript"]}
          demoUrl="#"
          repoUrl="#"
        />

        <ProjectCard
          title="Boba Maps"
          description="Finding boba anytime, anywhere"
          image={bobamap}
          tags={["React", "Node.js", "MongoDB", "Express.js"]}
          demoUrl="#"
          repoUrl="#"
        />

        <ProjectCard
          title="Sudofast"
          description="Interactive sudoku solving"
          image={sudofast}
          tags={["Python", "Flask", "Javascript"]}
          demoUrl="#"
          repoUrl="#"
        />
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  demoUrl: string
  repoUrl: string
}

function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-3 hover:border-purple-200 dark:hover:border-purple-900 transition-colors">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-700/10 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4">
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Github className="mr-2 h-4 w-4" /> Code
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
        >
          <ExternalLink className="mr-2 h-4 w-4" /> Demo
        </Button>
      </CardFooter>
    </Card>
  )
}
