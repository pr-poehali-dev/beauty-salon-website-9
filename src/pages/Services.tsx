import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Стрижка и укладка',
    description: 'Профессиональные стрижки любой сложности, укладки для особых случаев',
  },
  {
    title: 'Окрашивание',
    description: 'Сложные техники окрашивания, мелирование, балаяж, омбре',
  },
  {
    title: 'Маникюр и педикюр',
    description: 'Классический и аппаратный маникюр, дизайн ногтей, покрытие гель-лак',
  },
  {
    title: 'Макияж',
    description: 'Повседневный, вечерний, свадебный макияж от профессионалов',
  },
  {
    title: 'Уход за лицом',
    description: 'Чистки, пилинги, массаж лица, anti-age процедуры',
  },
  {
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-6xl md:text-7xl mb-6 text-center">
              Наши услуги
            </h1>
            <p className="text-center text-muted-foreground mb-24 tracking-wide">
              Профессиональный уход и безупречный результат в каждой процедуре
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-32">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="space-y-3 animate-fade-in border-l border-foreground/10 pl-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-3xl">{service.title}</h3>
                  <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border/20 pt-24">
              <h2 className="text-5xl md:text-6xl mb-16 text-center">
                Цены
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
                {priceList.map((category, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-2xl pb-4 border-b border-border/20">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start text-sm">
                          <span className="text-muted-foreground max-w-xs">{item.name}</span>
                          <span className="font-light tracking-wide ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-24">
              <Link to="/booking">
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-none border-foreground/20 hover:bg-foreground/5 text-sm tracking-wider px-16 py-7"
                >
                  записаться
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
