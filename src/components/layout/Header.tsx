import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105",
              isScrolled ? "bg-primary" : "bg-card/90"
            )}>
              <GraduationCap className={cn(
                "w-7 h-7 transition-colors",
                isScrolled ? "text-primary-foreground" : "text-primary"
              )} />
            </div>
            <div>
              <h1 className={cn(
                "font-heading font-bold text-xl transition-colors",
                isScrolled ? "text-foreground" : "text-card"
              )}>
                Sunrise Academy
              </h1>
              <p className={cn(
                "text-xs font-medium transition-colors",
                isScrolled ? "text-muted-foreground" : "text-card/80"
              )}>
                Excellence in Education
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                  location.pathname === link.path
                    ? isScrolled
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-primary'
                    : isScrolled
                    ? 'text-foreground hover:bg-accent'
                    : 'text-card hover:bg-card/20'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className={cn(
                "flex items-center gap-2 font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-card"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </a>
            <Button variant={isScrolled ? "maroon" : "hero"} asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-accent"
                : "text-card hover:bg-card/20"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-custom mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-lg font-medium transition-all duration-200',
                location.pathname === link.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border mt-2">
            <Button variant="maroon" className="w-full" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;