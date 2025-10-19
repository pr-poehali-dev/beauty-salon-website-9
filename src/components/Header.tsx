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
        <Link to="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C16 4 12 8 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 8 16 4 16 4Z" fill="#E8B4B8"/>
            <path d="M10 10C10 10 6 14 6 18C6 20.2091 7.79086 22 10 22C12.2091 22 14 20.2091 14 18C14 14 10 10 10 10Z" fill="#E8B4B8"/>
            <path d="M22 10C22 10 18 14 18 18C18 20.2091 19.7909 22 22 22C24.2091 22 26 20.2091 26 18C26 14 22 10 22 10Z" fill="#E8B4B8"/>
            <path d="M16 14C16 14 13 17 13 20C13 21.6569 14.3431 23 16 23C17.6569 23 19 21.6569 19 20C19 17 16 14 16 14Z" fill="#F4D4D7"/>
            <rect x="15" y="22" width="2" height="6" fill="#8B7355"/>
          </svg>
          <span className="text-xl font-light tracking-wider">САКУРА</span>
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