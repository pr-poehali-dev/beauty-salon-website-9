import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
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
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20 min-h-[calc(100vh-96px)] flex items-center">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-foreground">
              Записаться на процедуру
            </h1>
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
                      placeholder="Стрижка, окрашивание, маникюр..."
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-2 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Дополнительные пожелания или удобное время"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-32 text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur border-2 text-center p-6">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-2 text-center p-6">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-2 text-center p-6">
                <Icon name="Clock" size={32} className="mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Ежедневно 9:00 - 21:00</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}