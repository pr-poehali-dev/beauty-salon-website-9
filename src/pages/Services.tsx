import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    { name: 'Мелирование', price: 'от 4500₽' },
  ]},
  { category: 'Маникюр', items: [
    { name: 'Классический маникюр', price: '1200₽' },
    { name: 'Маникюр + покрытие', price: '2000₽' },
    { name: 'Дизайн ногтей', price: 'от 500₽' },
  ]},
  { category: 'Уход за лицом', items: [
    { name: 'Чистка лица', price: '3000₽' },
    { name: 'Пилинг', price: 'от 2500₽' },
    { name: 'Массаж лица', price: '2000₽' },
  ]},
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-foreground">
              Наши услуги
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Профессиональный уход и безупречный результат в каждой процедуре
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Цены на услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {priceList.map((category, index) => (
                <Card key={index} className="border-2 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
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

            <div className="text-center mt-12">
              <Link to="/booking">
                <Button size="lg" className="text-lg py-6 px-12 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Записаться на процедуру
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}