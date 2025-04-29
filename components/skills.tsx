import type React from "react"
import { Code, Database, Globe, Layout, Lightbulb, Server } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Technical{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Skills</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-2">
        <SkillCard
          title="Languages"
          skills={["Python", "C/C++", "Java", "GoLang", "Javascript"]}
          icon={<Code className="h-6 w-6 text-purple-500" />}
        />

        <SkillCard
          title="Frontend"
          skills={["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind"]}
          icon={<Layout className="h-6 w-6 text-purple-500" />}
        />

        <SkillCard
          title="Backend"
          skills={["Node.js", "Express", "Django", "Flask", "REST APIs", "GraphQL"]}
          icon={<Server className="h-6 w-6 text-purple-500" />}
        />

        <SkillCard
          title="Database"
          skills={["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Supabase"]}
          icon={<Database className="h-6 w-6 text-purple-500" />}
        />

        

        <SkillCard
          title="Dev Tools"
          skills={["Kubernetes", "Docker", "Visual Studio", "Netlify", "Postman", "Git"]}
          icon={<Globe className="h-6 w-6 text-purple-500" />}
        />

        <SkillCard
          title="Concepts"
          skills={["Agile", "Scrum", "CI/CD", "TDD", "API Design", "Microservices"]}
          icon={<Lightbulb className="h-6 w-6 text-purple-500" />}
        />
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="group relative p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200 dark:hover:border-purple-900">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600/40 to-purple-400/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-lg"></div>

      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-400"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
