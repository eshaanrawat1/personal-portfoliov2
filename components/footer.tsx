import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="max-w-3xl mx-auto bg-white-50 dark:bg-black-900 border-t border-gray-200 dark:border-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="flex flex-col items-center text-center">
          <Link
            href="mailto:jane.doe@example.com"
            className="text-xl font-medium mb-2 hover:text-purple-500 transition-colors"
          >
            erawat@uci.edu
          </Link>

          <p className="text-gray-600 dark:text-gray-400 mb-8">Based in Irvine, CA</p>

          <div className="flex gap-6 mb-12">
            <Link
              href="https://github.com/eshaanrawat1"
              target="_blank"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-500 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-500 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-500 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:jane.doe@example.com"
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-500 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Eshaan Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
