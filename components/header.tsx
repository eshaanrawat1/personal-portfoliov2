"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="max-w-3xl mx-auto sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">es.ra</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-purple-500">
            About
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-purple-500">
            Experience
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-purple-500">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-purple-500">
            Skills
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-purple-500">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
