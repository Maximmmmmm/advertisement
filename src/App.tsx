import { Shield, Heart, Wind, Baby, CheckCircle, Star, Clock, Package, TruckIcon } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { OrderForm } from './components/OrderForm';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const benefits = [
    { icon: Shield, text: 'Захищає голову та спину' },
    { icon: Wind, text: "М'який дихаючий матеріал" },
    { icon: Heart, text: 'Не тисне і не заважає' },
    { icon: Baby, text: 'Легка як іграшка' },
    { icon: CheckCircle, text: 'Дитина сама не знімає' },
  ];

  const reviews = [
    {
      name: 'Оксана М.',
      rating: 5,
      text: 'Дитина постійно падала назад, ця штука реально спасла 🙏 Тепер спокійно можу займатися справами, а малюк вчиться ходити безпечно.',
      date: '28 березня 2026',
    },
    {
      name: 'Андрій К.',
      rating: 5,
      text: 'Спокійніше стало, коли почав ходити. Раніше кожне падіння було стресом, а тепер він падає і сміється. Рекомендую!',
      date: '25 березня 2026',
    },
    {
      name: 'Марія В.',
      rating: 5,
      text: 'Купила після того, як донька вдарилася головою об підлогу. Шкодую, що не замовила раніше. Якість відмінна, дитині комфортно!',
      date: '23 березня 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            ⚠️ УВАГА! ВАЖЛИВА ІНФОРМАЦІЯ
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ваш малюк падає назад?<br />
            <span className="text-red-600">Це може закінчитись травмою…</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Захистіть голову малюка від ударів при падінні
          </p>
          
          <div className="relative max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/IMG_1058.jpg"
              alt="Малюк вчиться ходити"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-6 mb-8">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              🔥 Акція діє лише сьогодні! Залишилось всього <span className="text-red-600 text-2xl font-bold">14 штук</span> на складі
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ваш малюк часто падає назад?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ImageWithFallback
                src="/IMG_1057.jpg"
                alt="Щаслива дитина"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">У перші місяці навчання:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">❌</span>
                  <span className="text-lg">Дитина не контролює падіння</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">❌</span>
                  <span className="text-lg">Ризик удару головою дуже високий</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">❌</span>
                  <span className="text-lg">Навіть м'який килим не завжди рятує</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-600 rounded">
                <p className="text-lg font-semibold">👉 Один невдалий удар — і стрес для вас і дитини</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full mb-4 text-xl font-bold">
              ✅ РІШЕННЯ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Дитяча подушка-захист голови
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <ImageWithFallback
                src="/image.png"
                alt="Дитяча подушка-захист"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🧸 ПЕРЕВАГИ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Дихаючий матеріал</h3>
                  <p className="text-gray-700">Дитина не потіє навіть при активних іграх</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Зручні ремінці</h3>
                  <p className="text-gray-700">Подушка надійно тримається і не спадає</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border-2 border-pink-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Легка як іграшка</h3>
                  <p className="text-gray-700">Малюк навіть не помічає, що щось на ньому</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Милий дизайн</h3>
                  <p className="text-gray-700">Діти люблять носити і не намагаються зняти</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ЦІНА</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl mb-8">
            <div className="flex items-center justify-center gap-6 mb-6">
              <span className="text-3xl text-gray-400 line-through">799 грн</span>
              <span className="text-5xl md:text-6xl font-bold text-red-600">599 грн</span>
            </div>
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-xl font-bold mb-6">
              🔥 Знижка 200 грн тільки сьогодні!
            </div>
            
            <div className="mb-8">
              <p className="text-xl font-semibold mb-4">⏳ Акція закінчується через:</p>
              <CountdownTimer />
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mb-6">
              <p className="text-lg font-bold">❗ Залишилось всього 14 штук на складі</p>
              <p className="text-sm text-gray-700">Високий попит — замовляйте зараз</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <TruckIcon className="w-8 h-8" />
            🚚 ДОСТАВКА
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow">
              <Package className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h4 className="font-bold mb-2">Нова Пошта</h4>
              <p className="text-gray-700">1–3 дні</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <h4 className="font-bold mb-2">Оплата при отриманні</h4>
              <p className="text-gray-700">Перевірте перед оплатою</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <Shield className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-2">Гарантія якості</h4>
              <p className="text-gray-700">Повернення протягом 14 днів</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔘 ОФОРМЛЕННЯ ЗАМОВЛЕННЯ
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl">
            <OrderForm />
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                Ваші дані захищені
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">🔒 НАШІ ГАРАНТІЇ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <h4 className="font-bold mb-2">Якісний товар</h4>
              <p className="text-sm text-gray-700">Перевірено та сертифіковано</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <Clock className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h4 className="font-bold mb-2">Швидка доставка</h4>
              <p className="text-sm text-gray-700">Відправка протягом 24 годин</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <Package className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-2">Перевірка при отриманні</h4>
              <p className="text-sm text-gray-700">Оплата тільки після огляду</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            💬 Відгуки наших клієнтів
          </h2>
          
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-semibold">{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-sm">© 2026 Всі права захищені</p>
        <p className="text-xs text-gray-400 mt-2">Дитяча подушка-захист голови</p>
      </footer>
    </div>
  );
}