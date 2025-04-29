import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Work{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Experience</span>
      </h2>
      <div className="space-y-6">
        <ExperienceCard
          title="Palantir"
          company="Software Engineer Intern"
          period="June 2025 -- Sept. 2025"
          description="Intended contribution to Palantir Apollo, helping scale continuous delivery pipelines with Kubernetes and Go."
          skills={["Kubernetes", "TypeScript", "GoLang", "Java"]}
        />

        <ExperienceCard
          title="Interview Buddies"
          company="Software Engineer Intern"
          period="Mar. 2025 -- May 2025"
          description="Assisted development of a platform to assist job-seekers through mock interviews and AI-powered resume reviews."
          skills={["Python", "LaTeX", "Prompt Engineering"]}
        />

        <ExperienceCard
          title="Microsoft"
          company="University Shadowship Mentee"
          period="Apr. 2024 -- May 2024"
          description="Selected for the University Shadowship program, receiving guidance from a Microsoft Software Engineer."
          skills={["JavaScript", "Cryptography", "APIs"]}
        />
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 hover:border-3 hover:border-purple-200 dark:hover:border-purple-900 transition-colors">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="mb-3">{title}</CardTitle>
            <CardDescription className="text-base text-gray-600 dark:text-gray-400">{company}</CardDescription>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-500">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="-mt-3">
        <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900/30"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
