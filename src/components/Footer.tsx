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
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C16 4 12 8 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 8 16 4 16 4Z" fill="#E8B4B8"/>
              <path d="M10 10C10 10 6 14 6 18C6 20.2091 7.79086 22 10 22C12.2091 22 14 20.2091 14 18C14 14 10 10 10 10Z" fill="#E8B4B8"/>
              <path d="M22 10C22 10 18 14 18 18C18 20.2091 19.7909 22 22 22C24.2091 22 26 20.2091 26 18C26 14 22 10 22 10Z" fill="#E8B4B8"/>
              <path d="M16 14C16 14 13 17 13 20C13 21.6569 14.3431 23 16 23C17.6569 23 19 21.6569 19 20C19 17 16 14 16 14Z" fill="#F4D4D7"/>
              <rect x="15" y="22" width="2" height="6" fill="#8B7355"/>
            </svg>
            <span className="text-sm font-light tracking-wide">САКУРА</span>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">© 2024 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}