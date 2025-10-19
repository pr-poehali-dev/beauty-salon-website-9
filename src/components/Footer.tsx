export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-muted/20 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-sm tracking-widest mb-4 font-light">КОНТАКТЫ</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>г. Москва, ул. Примерная, д. 10</p>
              <p>+7 (999) 123-45-67</p>
              <p>Ежедневно 9:00 - 21:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm tracking-widest mb-4 font-light">УСЛУГИ</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Стрижка и укладка</p>
              <p>Окрашивание</p>
              <p>Маникюр и педикюр</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm tracking-widest mb-4 font-light">ИНФОРМАЦИЯ</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>О салоне</p>
              <p>Наши работы</p>
              <p>Отзывы</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">© 2024 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}