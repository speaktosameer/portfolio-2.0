"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex flex-col space-y-6 mt-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sameer Ansari
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-lg text-muted-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-lg text-muted-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="#skills"
                className="text-lg text-muted-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
              <Link
                href="#portfolio"
                className="text-lg text-muted-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-lg text-muted-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </nav>
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
