import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Scissors',
    title: 'Стрижка и укладка',
    description: 'Профессиональные стрижки любой сложности, укладки для особых случаев',
  },
  {
    icon: 'Sparkles',
    title: 'Окрашивание',
    description: 'Сложные техники окрашивания, мелирование, балаяж, омбре',
  },
  {
    icon: 'Heart',
    title: 'Маникюр и педикюр',
    description: 'Классический и аппаратный маникюр, дизайн ногтей, покрытие гель-лак',
  },
  {
    icon: 'Smile',
    title: 'Макияж',
    description: 'Повседневный, вечерний, свадебный макияж от профессионалов',
  },
  {
    icon: 'Flower2',
    title: 'Уход за лицом',
    description: 'Чистки, пилинги, массаж лица, anti-age процедуры',
  },
  {
    icon: 'Sparkle',
    title: 'Spa-процедуры',
    description: 'Расслабляющие спа-ритуалы, массажи, обертывания',
  },
];

const gallery = [
  {
    url: 'https://cdn.poehali.dev/projects/8fd1d776-599a-404e-bbc2-5218a36378b4/files/34940243-9527-4f12-8402-dcbed5b999fd.jpg',
    alt: 'Маникюр',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fd1d776-599a-404e-bbc2-5218a36378b4/files/399b530b-e470-4a1d-993c-c1e88ceb6a7d.jpg',
    alt: 'Укладка волос',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fd1d776-599a-404e-bbc2-5218a36378b4/files/4aab7a4d-cfb8-4f0d-a549-839126bc5651.jpg',
    alt: 'Макияж',
  },
];

const reviews = [
  {
    name: 'Анна Петрова',
    rating: 5,
    text: 'Прекрасный салон! Мастера — настоящие профессионалы.',
  },
  {
    name: 'Мария Иванова',
    rating: 5,
    text: 'Делала сложное окрашивание — результат превзошел все ожидания!',
  },
  {
    name: 'Екатерина Смирнова',
    rating: 5,
    text: 'Хожу сюда уже год. Всегда безупречный маникюр!',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Салон красоты
          </Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-primary font-semibold">Главная</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
            <Link to="/booking" className="hover:text-primary transition-colors">Записаться</Link>
            <Link to="/reviews" className="hover:text-primary transition-colors">Отзывы</Link>
          </div>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-primary/30 via-secondary/20 to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Салон красоты
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-foreground/80">
            Профессиональный уход за вашей красотой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="text-lg py-6 px-12 rounded-full shadow-lg hover:shadow-xl transition-all">
                Записаться онлайн
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg py-6 px-12 rounded-full">
                Наши услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="text-lg py-6 px-8 rounded-full">
                Посмотреть все услуги и цены
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-2xl group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <p className="text-white text-xl font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 bg-card/50 backdrop-blur animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 italic">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews">
              <Button size="lg" className="text-lg py-6 px-8 rounded-full">
                Все отзывы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            Готовы преобразиться?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Запишитесь на процедуру прямо сейчас и получите скидку 10% на первый визит
          </p>
          <Link to="/booking">
            <Button size="lg" className="text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-3xl transition-all">
              Записаться сейчас
            </Button>
          </Link>
        </div>
      </section>

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
    </div>
  );
}
