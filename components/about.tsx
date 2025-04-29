import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Pfp from "../app/pfp.jpg"

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Eshaan Rawat
            </span>
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
          I'm a second-year computer science student at UC Irvine.
          In my free time, I enjoy playing chess, basketball, and trying out new food places. 
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
          This summer I'll be interning at Palantir in NYC. Don't hesitate to
          get in touch!
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1R0zKQjD_tQtoL7GKmM1i_TZExcoXHNOT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-purple-200 dark:border-purple-900">
                Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10"></div>
            <Image
              src={Pfp}
              alt="Jane Doe"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
