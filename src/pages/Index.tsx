import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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

const priceList = [
  { category: 'Стрижки', items: [
    { name: 'Женская стрижка', price: 'от 2500₽' },
    { name: 'Мужская стрижка', price: 'от 1500₽' },
    { name: 'Укладка', price: 'от 1800₽' },
  ]},
  { category: 'Окрашивание', items: [
    { name: 'Окрашивание в один тон', price: 'от 3500₽' },
    { name: 'Сложное окрашивание', price: 'от 6000₽' },
    { name: 'Мелирование', price: 'от 5000₽' },
  ]},
  { category: 'Маникюр', items: [
    { name: 'Маникюр классический', price: 'от 1200₽' },
    { name: 'Покрытие гель-лак', price: 'от 1500₽' },
    { name: 'Дизайн (1 ноготь)', price: 'от 100₽' },
  ]},
  { category: 'Макияж', items: [
    { name: 'Дневной макияж', price: 'от 2000₽' },
    { name: 'Вечерний макияж', price: 'от 3500₽' },
    { name: 'Свадебный макияж', price: 'от 5000₽' },
  ]},
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

const initialReviews = [
  {
    name: 'Анна Петрова',
    rating: 5,
    text: 'Прекрасный салон! Мастера — настоящие профессионалы. Особенно понравилась атмосфера уюта и заботы. Обязательно вернусь!',
    date: '2 недели назад',
  },
  {
    name: 'Мария Иванова',
    rating: 5,
    text: 'Делала сложное окрашивание — результат превзошел все ожидания! Волосы живые, цвет насыщенный. Спасибо мастеру Елене!',
    date: '1 месяц назад',
  },
  {
    name: 'Екатерина Смирнова',
    rating: 5,
    text: 'Хожу сюда уже год. Всегда безупречный маникюр и приятное общение. Рекомендую всем подругам!',
    date: '3 недели назад',
  },
];

export default function Index() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 5,
    text: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      name: reviewData.name,
      rating: reviewData.rating,
      text: reviewData.text,
      date: 'Только что',
    };
    setReviews([newReview, ...reviews]);
    toast({
      title: 'Отзыв опубликован!',
      description: 'Спасибо за ваш отзыв',
    });
    setReviewData({ name: '', rating: 5, text: '' });
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-primary-foreground">Салон красоты</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground/80 hover:text-foreground transition-colors">
              Работы
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-foreground/80 hover:text-foreground transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground/80 hover:text-foreground transition-colors">
              Отзывы
            </button>
            <Button onClick={() => scrollToSection('booking')} className="rounded-full">
              Записаться
            </Button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors">
                Работы
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors">
                Отзывы
              </button>
              <Button onClick={() => scrollToSection('booking')} className="rounded-full w-full">
                Записаться
              </Button>
            </div>
          </div>
        )}
      </nav>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,222,226,0.3),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(229,222,255,0.3),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
            Красота в каждой детали
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto font-light">
            Профессиональный салон красоты с заботой о вас
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на процедуру
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <p className="text-white text-xl font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
            Прайс-лист
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {priceList.map((category, index) => (
              <Card key={index} className="border-2 bg-card/50 backdrop-blur animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-semibold text-primary-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-foreground">
            Записаться на процедуру
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>
          <Card className="border-2 shadow-2xl bg-card/80 backdrop-blur">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="text-lg">Желаемая услуга</Label>
                  <Input
                    id="service"
                    placeholder="Например: стрижка и окрашивание"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Укажите предпочтительное время..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 min-h-24 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Отзывы клиентов
            </h2>
            <Button 
              onClick={() => setShowReviewForm(!showReviewForm)} 
              className="rounded-full mt-4 md:mt-0"
              variant={showReviewForm ? "outline" : "default"}
            >
              {showReviewForm ? 'Отмена' : 'Оставить отзыв'}
            </Button>
          </div>

          {showReviewForm && (
            <Card className="mb-12 border-2 bg-card/80 backdrop-blur animate-fade-in max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="reviewName" className="text-lg">Ваше имя</Label>
                    <Input
                      id="reviewName"
                      placeholder="Анна"
                      value={reviewData.name}
                      onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                      required
                      className="mt-2 text-base"
                    />
                  </div>
                  <div>
                    <Label className="text-lg">Оценка</Label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewData({ ...reviewData, rating: star })}
                          className="transition-transform hover:scale-110"
                        >
                          <Icon 
                            name="Star" 
                            size={32} 
                            className={star <= reviewData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="reviewText" className="text-lg">Ваш отзыв</Label>
                    <Textarea
                      id="reviewText"
                      placeholder="Расскажите о вашем опыте..."
                      value={reviewData.text}
                      onChange={(e) => setReviewData({ ...reviewData, text: e.target.value })}
                      required
                      className="mt-2 min-h-32 text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                    Опубликовать отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 italic">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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