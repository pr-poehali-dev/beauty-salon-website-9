import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function Reviews() {
  const { toast } = useToast();
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 5,
    text: '',
  });

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
      <Header />

      <main className="pt-24">
        <section className="py-20 px-4 bg-background min-h-[calc(100vh-96px)]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 md:mb-0">
                Отзывы клиентов
              </h1>
              <Button 
                onClick={() => setShowReviewForm(!showReviewForm)} 
                className="rounded-full"
                size="lg"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>

      <Footer />
    </div>
  );
}