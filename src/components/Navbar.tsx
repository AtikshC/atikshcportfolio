import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-ink">
      <nav className="container px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-display text-2xl md:text-3xl font-bold text-ink bg-primary border-[3px] border-ink px-3 py-1 shadow-brutal-sm">
            Atiksh.
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink font-bold text-sm uppercase tracking-wide hover:bg-primary px-2 py-1 border-[3px] border-transparent hover:border-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" asChild>
              <a href="https://github.com/AtikshC" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2 text-ink border-[3px] border-ink bg-primary" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t-[3px] border-ink">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-ink font-bold py-2 border-b-2 border-ink/20">
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" size="sm" asChild className="w-fit">
                <a href="https://github.com/AtikshC" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
