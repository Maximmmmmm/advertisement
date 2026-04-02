import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;
const RATE_LIMIT_KEY = 'form_submissions';
const MAX_SUBMISSIONS = 2;

function checkRateLimit(): boolean {
  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const submissions: number[] = stored ? JSON.parse(stored) : [];
  
  // Фільтруємо тільки за останні 24 години
  const recent = submissions.filter(ts => now - ts < 24 * 60 * 60 * 1000);
  
  if (recent.length >= MAX_SUBMISSIONS) return false;
  
  recent.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
  return true;
}

export function OrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Валідація ПІБ
    if (name.trim().length < 8) {
      toast.error('ПІБ має містити не менше 8 символів');
      return;
    }

    // 2. Валідація телефону (залишаємо тільки цифри)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 12) {
      toast.error('Будь ласка, введіть коректний номер телефону');
      return;
    }

    // 3. Валідація відділення Нової Пошти
    if (branch.trim().length < 6) {
      toast.error('Вкажіть коректну адресу відділення (не менше 6 символів)');
      return;
    }

    // 4. Перевірка ліміту відправок
    if (!checkRateLimit()) {
      toast.error('Ви вже відправили максимальну кількість заявок сьогодні. Спробуйте завтра.');
      return;
    }

    setIsSubmitting(true);

    const message = `
📦 *Нове замовлення*

👤 *ПІБ:* ${name.trim()}
📞 *Телефон:* ${phone.trim()}
🏢 *Відділення Нової Пошти:* ${branch.trim()}
    `.trim();

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!res.ok) throw new Error('Telegram API error');

      toast.success("Замовлення прийнято! Ми зв'яжемося з вами найближчим часом.");
      
      // Очищаємо форму після успішної відправки
      setName('');
      setPhone('');
      setBranch('');
    } catch {
      toast.error('Помилка відправки. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name" className="text-lg">ПІБ</Label>
        <Input
          id="name"
          type="text"
          placeholder="Введіть ваше прізвище, ім'я та по батькові"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 h-12 text-lg"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone" className="text-lg">Номер телефону</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+380 XX XXX XX XX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 h-12 text-lg"
          required
        />
      </div>
      <div>
        <Label htmlFor="branch" className="text-lg">Відділення Нової Пошти</Label>
        <Input
          id="branch"
          type="text"
          placeholder="Місто, відділення №..."
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="mt-2 h-12 text-lg"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full h-14 text-xl bg-green-600 hover:bg-green-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Оформлення...' : 'Оформити замовлення'}
      </Button>
    </form>
  );
}