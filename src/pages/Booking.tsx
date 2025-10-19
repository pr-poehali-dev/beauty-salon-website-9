import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Booking() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="py-32 px-6 min-h-[calc(100vh-96px)] flex items-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-6xl md:text-7xl mb-6 text-center">
              Записаться
            </h1>
            <p className="text-center text-muted-foreground mb-16 tracking-wide">
              Оставьте заявку, и мы свяжемся с вами для уточнения деталей
            </p>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm tracking-wide font-light">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm tracking-wide font-light">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder=""
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="service" className="text-sm tracking-wide font-light">
                  Желаемая услуга
                </Label>
                <Input
                  id="service"
                  placeholder=""
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm tracking-wide font-light">
                  Комментарий
                </Label>
                <Textarea
                  id="message"
                  placeholder=""
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-0 border-b border-border/40 rounded-none px-0 min-h-24 focus-visible:ring-0 focus-visible:border-foreground/60 resize-none"
                />
              </div>

              <div className="pt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="outline"
                  className="w-full rounded-none border-foreground/20 hover:bg-foreground/5 text-sm tracking-wider py-6"
                >
                  отправить заявку
                </Button>
              </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-center">
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground">АДРЕС</p>
                <p className="text-sm">г. Москва, ул. Примерная, д. 10</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground">ТЕЛЕФОН</p>
                <p className="text-sm">+7 (999) 123-45-67</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground">ВРЕМЯ РАБОТЫ</p>
                <p className="text-sm">Ежедневно 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
