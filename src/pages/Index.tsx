import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-screen flex items-center px-4 pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
              КРАСОТА В КАЖДОЙ<br />ДЕТАЛИ
            </h1>
            <p className="text-sm tracking-wide text-muted-foreground max-w-md">
              профессиональный салон<br />красоты с заботой о вас
            </p>
            <Link to="/booking">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-none border-foreground/20 hover:bg-foreground/5 text-sm tracking-wider px-12 py-6"
              >
                записаться онлайн
              </Button>
            </Link>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://cdn.poehali.dev/files/057dc95a-0b27-4f12-aa55-42d3dde21576.png" 
              alt="Beauty salon"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl mb-20 text-center">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: 'Стрижка и укладка', desc: 'Профессиональные стрижки любой сложности' },
              { title: 'Окрашивание', desc: 'Сложные техники окрашивания, балаяж' },
              { title: 'Маникюр и педикюр', desc: 'Аппаратный маникюр, дизайн ногтей' },
              { title: 'Макияж', desc: 'Дневной, вечерний, свадебный' },
              { title: 'Уход за лицом', desc: 'Чистки, пилинги, массаж лица' },
              { title: 'Spa-процедуры', desc: 'Расслабляющие спа-ритуалы' },
            ].map((service, index) => (
              <div 
                key={index} 
                className="space-y-3 animate-fade-in border-l border-foreground/10 pl-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl">{service.title}</h3>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services">
              <Button 
                size="lg" 
                variant="ghost"
                className="text-sm tracking-wider hover:bg-transparent hover:text-foreground"
              >
                все услуги и цены →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-5xl md:text-6xl">
            Готовы преобразиться?
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-2xl mx-auto">
            Запишитесь на процедуру прямо сейчас и получите скидку 10% на первый визит
          </p>
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
      </section>

      <Footer />
    </div>
  );
}
