import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("hero");

  const navigation = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.frontend"), href: "#frontend-skills" },
    { name: t("nav.backend"), href: "#backend-skills" },
    { name: t("nav.portfolio"), href: "#portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmail = () => {
    window.location.href = "mailto:angelo961996@gmail.com";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 shadow-md backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
              AP
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              aria-label={'Navigation to ' + item.name}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Button aria-label="Email" variant="outline" onClick={handleEmail} className="gap-2">
            <Mail className="h-4 w-4" />
            {t("nav.contact")}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en-US" ? "it-IT" : "en-US")
            }
            className="text-sm px-2"
            aria-label="Cambia lingua"
          >
            {i18n.language === "en-US" ? "IT" : "EN"}
          </Button>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleEmail}
            className="rounded-full"
            aria-label="Invia email"
          >
            <Mail className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en-US" ? "it-IT" : "en-US")
            }
            className="text-sm px-2"
            aria-label="Cambia lingua"
          >
            {i18n.language === "en-US" ? "IT" : "EN"}
          </Button>

          <ThemeToggle aria-label="Cambia tema" />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-sm p-4 shadow-lg">
          <nav className="flex flex-col items-center gap-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-lg font-medium w-full py-2 text-center hover:text-primary transition-colors"
                aria-label={'Navigation to ' + item.name}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
