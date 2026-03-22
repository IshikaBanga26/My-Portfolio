import {Button} from "@/components/Button";
import {Menu, X} from "lucide-react";
import {useState} from "react";

const navLinks = [
    {href : "#about", label: "About"},
    {href : "#projects", label: "Projects"},
    {href : "#milestones", label: "Milestones"},
]

export const Navbar = () => {
    const[isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    return (
        <header className = "fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className = "container mx-auto justify-between flex items-center px-6">
                <a href = "#" className = "text-xl font-bold tracking-tight hover:text-[var(--color-primary)]">
                    IB<span className="text-[var(--color-primary)]">.</span>
                </a>
                {/* Desktop Nav*/}
                <div className="flex items-center gap-1">
                    < div className="glass rounded-full px-2 py-1 md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-surface)] transition-colors"> 
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Desktop Contact Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                    <Button size="sm">
                        Contact Me
                    </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-[var(--color-foreground)] cursor-pointer" 
                onClick = {() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size = {24}></X> : <Menu size = {24}></Menu>}
                </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                onClick = {() => setIsMobileMenuOpen(false)}
                                className="text-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] py-2"> 
                                {link.label}
                            </a>
                        ))}
                        <Button onClick = {() => setIsMobileMenuOpen(false)}>Contact Me</Button>
                    </div>
                </div>
                )}
        </header>
    )
    }

export default Navbar
