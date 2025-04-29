import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16"></div>
        <Experience />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16"></div>
        <Projects />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16"></div>
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
