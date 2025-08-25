import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Orbit, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6 py-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Orbit className="h-7 w-7 text-primary" />
            <span className="font-headline">Mat Digital</span>
          </Link>
          <p className="text-muted-foreground">
            Accélérez votre réussite sur internet.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold">Plan du site</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/#courses" className="text-muted-foreground hover:text-primary">Formations</Link>
                <Link href="/#about" className="text-muted-foreground hover:text-primary">À Propos</Link>
                <Link href="/study-plan" className="text-muted-foreground hover:text-primary">Plan d'étude IA</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Légal</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-muted-foreground hover:text-primary">Conditions d'utilisation</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Politique de confidentialité</Link>
              </nav>
            </div>
            <div className="space-y-4">
                <h4 className="font-semibold">Newsletter</h4>
                <p className="text-muted-foreground text-sm">Recevez nos meilleurs conseils et offres exclusives.</p>
                <form className="flex gap-2">
                    <Input type="email" placeholder="Votre email" className="flex-1" />
                    <Button type="submit">S'inscrire</Button>
                </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mat Digital. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
