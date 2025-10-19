import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="py-32 px-6 min-h-[calc(100vh-96px)]">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-20">
              <h1 className="text-6xl md:text-7xl mb-6 md:mb-0">
                Отзывы
              </h1>
              <Button 
                onClick={() => setShowReviewForm(!showReviewForm)} 
                variant="outline"
                size="lg"
                className="rounded-none border-foreground/20 hover:bg-foreground/5 text-sm tracking-wider px-12"
              >
                {showReviewForm ? 'отмена' : 'оставить отзыв'}
              </Button>
            </div>

            {showReviewForm && (
              <div className="mb-20 max-w-2xl mx-auto animate-fade-in border border-border/20 p-12">
                <form onSubmit={handleReviewSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="reviewName" className="text-sm tracking-wide font-light">
                      Ваше имя
                    </Label>
                    <Input
                      id="reviewName"
                      placeholder=""
                      value={reviewData.name}
                      onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                      required
                      className="border-0 border-b border-border/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground/60"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm tracking-wide font-light">Оценка</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewData({ ...reviewData, rating: star })}
                          className="transition-transform hover:scale-110"
                        >
                          <Icon 
                            name="Star" 
                            size={28} 
                            className={star <= reviewData.rating ? 'fill-foreground text-foreground' : 'text-border'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="reviewText" className="text-sm tracking-wide font-light">
                      Ваш отзыв
                    </Label>
                    <Textarea
                      id="reviewText"
                      placeholder=""
                      value={reviewData.text}
                      onChange={(e) => setReviewData({ ...reviewData, text: e.target.value })}
                      required
                      className="border-0 border-b border-border/40 rounded-none px-0 min-h-32 focus-visible:ring-0 focus-visible:border-foreground/60 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    variant="outline"
                    className="w-full rounded-none border-foreground/20 hover:bg-foreground/5 text-sm tracking-wider py-6"
                  >
                    опубликовать
                  </Button>
                </form>
              </div>
            )}

            <div className="space-y-12">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="border-l border-border/20 pl-8 py-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-foreground text-foreground" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {review.text}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wide">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
