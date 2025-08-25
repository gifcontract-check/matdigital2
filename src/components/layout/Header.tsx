import Link from "next/link";
import { Orbit, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#about", label: "À Propos" },
  { href: "/#courses", label: "Formations" },
  { href: "/#testimonials", label: "Avis" },
  { href: "/study-plan", label: "Plan d'étude IA" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Orbit className="h-7 w-7 text-primary" />
          <span className="font-headline">Mat Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
                <Link href="#">Contact</Link>
            </Button>
            <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <Orbit className="h-7 w-7 text-primary" />
                  <span className="font-headline">Mat Digital</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="#">Contact</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
