import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/services', label: 'услуги' },
    { path: '/booking', label: 'работы' },
    { path: '/booking', label: 'цены' },
    { path: '/reviews', label: 'отзывы' },
    { path: '/booking', label: 'записаться' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/20">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-sm tracking-widest font-light">
          тут будет лого
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wide transition-colors ${
                isActive(item.path) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              } ${item.label === 'записаться' ? 'bg-primary/40 px-6 py-2.5 rounded-sm' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg py-2 transition-colors ${
                  isActive(item.path) ? 'text-primary font-semibold' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}