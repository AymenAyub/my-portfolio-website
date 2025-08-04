import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-secondary/30 text-foreground py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 text-primary hover:text-primary-foreground">
                <ArrowUp size={20}/></a>
        </footer>
    );
}