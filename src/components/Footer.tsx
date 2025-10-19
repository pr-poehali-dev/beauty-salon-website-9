import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-primary/30 to-secondary/30 text-center">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-4">Салон красоты</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            <span>г. Москва, ул. Примерная, д. 10</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Phone" size={20} />
            <span>+7 (999) 123-45-67</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={20} />
            <span>Ежедневно 9:00 - 21:00</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
      </div>
    </footer>
  );
}
