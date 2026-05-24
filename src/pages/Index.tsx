import { useState } from "react";
import Icon from "@/components/ui/icon";

// ===== ДАННЫЕ =====
const menuCategories = [
  { id: "shawarma", label: "Шаурма", emoji: "🌯" },
  { id: "gyro", label: "Гиро", emoji: "🥙" },
  { id: "burgers", label: "Бургеры", emoji: "🍔" },
  { id: "drinks", label: "Напитки", emoji: "🥤" },
  { id: "fries", label: "Фри", emoji: "🍟" },
  { id: "wings", label: "Крылья и стрипсы", emoji: "🍗" },
];

const menuItems = [
  // Шаурма
  { id: 1, category: "shawarma", name: "Шаурма Лайт", price: 239, desc: "Куриная грудка, свежие овощи, лёгкий йогуртовый соус, лаваш", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg" },
  { id: 2, category: "shawarma", name: "Шаурма Классическая", price: 269, desc: "Куриное мясо, свежие овощи, чесночный соус, лаваш", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg", popular: true },
  { id: 3, category: "shawarma", name: "Шаурма Мясная с беконом", price: 319, desc: "Курица + хрустящий бекон, овощи, фирменный соус, лаваш", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg", hot: true },
  { id: 4, category: "shawarma", name: "Шаурма Сырная", price: 299, desc: "Курица, плавленый чеддер, овощи, сырный соус, лаваш", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg", popular: true },
  { id: 5, category: "shawarma", name: "Шаурма Большая", price: 359, desc: "Двойная порция курицы, много овощей, двойной соус, лаваш", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg" },
  // Гиро
  { id: 5, category: "gyro", name: "Гиро Классик", price: 289, desc: "Свинина на вертеле, питта, томаты, огурец, соус дзадзики", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg", popular: true },
  { id: 6, category: "gyro", name: "Гиро Куриный", price: 269, desc: "Куриное мясо на гриле, питта, свежие овощи, соус дзадзики", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg" },
  { id: 7, category: "gyro", name: "Гиро Микс", price: 319, desc: "Свинина + курица, питта, лук, томаты, соус тцатцики", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg", hot: true },
  // Бургеры
  { id: 8, category: "burgers", name: "Бобёр Делюкс", price: 349, oldPrice: 429, desc: "Двойная говядина, чеддер, карамелизованный лук, фирменный соус", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg", hot: true, popular: true },
  { id: 9, category: "burgers", name: "Чикен Бобёр", price: 299, desc: "Хрустящий куриный стейк, салат, томаты, айоли", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg", popular: true },
  { id: 10, category: "burgers", name: "Смоки Бобёр", price: 379, desc: "Говядина ангус, бекон, лук-кольца, фирменный соус BBQ", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg", hot: true },
  { id: 11, category: "burgers", name: "Дабл Чиз Бобёр", price: 329, desc: "Двойной чизбургер с маринованными огурчиками и горчицей", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/97ea43ad-731b-4da0-a797-fc42ddcbff34.jpg" },
  // Напитки
  { id: 12, category: "drinks", name: "Кола 0.5л", price: 89, desc: "Освежающая Coca-Cola со льдом", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg" },
  { id: 13, category: "drinks", name: "Лимонад Цитрус", price: 119, desc: "Домашний лимонад с апельсином и мятой", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", popular: true },
  { id: 14, category: "drinks", name: "Айран 0.3л", price: 79, desc: "Освежающий кисломолочный напиток, хорошо к шаурме", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg" },
  { id: 15, category: "drinks", name: "Морс Ягодный", price: 99, desc: "Домашний морс из лесных ягод, без консервантов", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg" },
  // Фри
  { id: 16, category: "fries", name: "Фри Классик М", price: 99, desc: "Золотистый картофель фри, соль, соус на выбор", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", popular: true },
  { id: 17, category: "fries", name: "Фри Классик Б", price: 139, desc: "Большая порция золотистого картофеля фри", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg" },
  { id: 18, category: "fries", name: "Фри Острый", price: 119, desc: "Картофель фри с острой паприкой и соусом чили", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", hot: true },
  { id: 19, category: "fries", name: "Фри Сырный", price: 149, desc: "Картофель фри с расплавленным чеддером и беконом", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", popular: true },
  // Крылья и криспи
  { id: 20, category: "wings", name: "Крылья BBQ x6", price: 219, desc: "Сочные крылья в соусе барбекю, запечённые до хруста", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", popular: true },
  { id: 21, category: "wings", name: "Крылья Острые x6", price: 229, desc: "Крылья в остром соусе буффало, соус ранч в подарок", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", hot: true },
  { id: 22, category: "wings", name: "Стрипсы x4", price: 199, desc: "Куриные стрипсы в хрустящей панировке, соус на выбор", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg", popular: true },
  { id: 23, category: "wings", name: "Стрипсы Наггетсы x8", price: 199, desc: "Сочные куриные кусочки в хрустящей панировке", image: "https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg" },
];

const promos = [
  { id: 1, title: "Комбо -20%", subtitle: "До 31 мая", desc: "Любое комбо со скидкой 20% при заказе от 400 ₽", badge: "🔥 Горящее", color: "from-red-900/80 to-orange-900/60" },
  { id: 2, title: "2+1 на бургеры", subtitle: "Каждую среду", desc: "Закажи 2 бургера и получи третий в подарок", badge: "🎁 Подарок", color: "from-orange-900/80 to-yellow-900/60" },
  { id: 3, title: "Бесплатная доставка", subtitle: "Заказ от 500 ₽", desc: "Доставляем бесплатно по всему городу при заказе от 500 ₽", badge: "🚀 Быстро", color: "from-amber-900/80 to-red-900/60" },
];

const branches = [
  { name: "Сытый бобёр Центр", address: "ул. Ленина, 15", phone: "+7 (999) 123-45-67", hours: "10:00 – 23:00", metro: "м. Площадь Революции" },
  { name: "Сытый бобёр Север", address: "пр. Победы, 88", phone: "+7 (999) 123-45-68", hours: "11:00 – 23:00", metro: "м. Речной вокзал" },
  { name: "Сытый бобёр ТЦ Галерея", address: "ул. Садовая, 42, 3 этаж", phone: "+7 (999) 123-45-69", hours: "10:00 – 22:00", metro: "м. Садовая" },
];

const reviews = [
  { name: "Алексей М.", rating: 5, text: "Лучшие бургеры в городе! ОгоньБургер просто сжигает конкурентов. Приезжаю сюда каждую неделю.", date: "20 мая" },
  { name: "Марина К.", rating: 5, text: "Доставка за 25 минут, всё горячее и вкусное. Комбо Семейный — наш выбор по пятницам!", date: "18 мая" },
  { name: "Дима Р.", rating: 4, text: "Картошка Огонь — это нечто! Острая, хрустящая. Немного долго ждал, но оно того стоило.", date: "15 мая" },
  { name: "Юля В.", rating: 5, text: "Наггетсы с соусом чили — моя слабость. Каждый раз заказываю двойную порцию.", date: "12 мая" },
  { name: "Сергей П.", rating: 5, text: "Чикен Криспи — шедевр. Сочный внутри, хрустящий снаружи. Соус айоли просто изумительный!", date: "10 мая" },
  { name: "Аня Т.", rating: 4, text: "Лимонад Цитрус потрясающий. Натуральный вкус, не химия. Беру постоянно к бургерам.", date: "8 мая" },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const sections = ["home", "menu", "promos", "delivery", "branches", "reviews"];
const sectionLabels = ["Главная", "Меню", "Акции", "Доставка", "Адреса", "Отзывы"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("shawarma");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === id);
      if (existing && existing.qty > 1) return prev.map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c);
      return prev.filter(c => c.id !== id);
    });
  };

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredMenu = menuItems.filter(i => i.category === activeCategory);
  const popularItems = menuItems.filter(i => i.popular);

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)", color: "#FAF0E0" }}>

      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="text-2xl">🦫</span>
            <span className="font-bold text-xl tracking-wider fire-text" style={{ fontFamily: "Oswald, sans-serif" }}>Сытый бобёр</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={activeSection === s
                  ? { background: "rgba(255,140,0,0.2)", color: "white", fontFamily: "Oswald" }
                  : { color: "rgba(255,200,150,0.7)", fontFamily: "Oswald" }
                }
              >
                {sectionLabels[i]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold text-sm transition-all duration-200 animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)", fontFamily: "Oswald" }}
            >
              <Icon name="ShoppingCart" size={18} />
              <span>Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden text-orange-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-orange-900/30 py-3 px-4 flex flex-col gap-1" style={{ background: "rgba(20,16,8,0.98)" }}>
            {sections.map((s, i) => (
              <button key={s} onClick={() => scrollTo(s)} className="text-left py-2.5 px-3 rounded-lg text-orange-100 hover:bg-orange-900/30 font-medium transition-colors" style={{ fontFamily: "Oswald" }}>
                {sectionLabels[i]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ГЛАВНАЯ */}
      <section id="home" className="hero-bg pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(255,59,0,0.15)", border: "1px solid rgba(255,59,0,0.3)", color: "#FF8C00" }}>
              🦫 Доставка за 30 минут
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
              <span className="fire-text">СЫТНЫЙ.</span><br />
              <span className="text-white">ВКУСНЫЙ.</span><br />
              <span style={{ color: "#FFD000" }}>БОБЁР.</span>
            </h1>
            <p className="text-lg mb-8 max-w-md leading-relaxed" style={{ color: "rgba(255,200,150,0.7)" }}>
              Сочные бургеры, хрустящая картошка и фирменные соусы. Готовим за 10 минут, доставляем горячим.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("menu")}
                className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)", fontFamily: "Oswald", letterSpacing: "0.05em" }}
              >
                СМОТРЕТЬ МЕНЮ
              </button>
              <button
                onClick={() => scrollTo("promos")}
                className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105"
                style={{ border: "2px solid #FF8C00", color: "#FF8C00", fontFamily: "Oswald", letterSpacing: "0.05em" }}
              >
                АКЦИИ
              </button>
            </div>
            <div className="flex gap-8 mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,140,0,0.2)" }}>
              {[["500+", "Отзывов"], ["4.9★", "Рейтинг"], ["30 мин", "Доставка"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black fire-text" style={{ fontFamily: "Oswald" }}>{val}</div>
                  <div className="text-sm" style={{ color: "rgba(255,200,150,0.6)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in hidden md:block">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)" }} />
            <img
              src="https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/a0843940-745c-44a7-bce1-36696b5fefb8.jpg"
              alt="ОгоньБургер"
              className="w-full rounded-3xl object-cover glow-red"
              style={{ aspectRatio: "1/1", border: "1px solid rgba(255,140,0,0.2)" }}
            />
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl" style={{ background: "rgba(20,16,8,0.95)", border: "1px solid rgba(255,140,0,0.3)" }}>
              <div className="text-xs mb-0.5" style={{ color: "rgba(255,180,100,0.7)" }}>Хит продаж</div>
              <div className="font-bold text-white" style={{ fontFamily: "Oswald" }}>Бобёр Делюкс</div>
              <div className="fire-text font-black" style={{ fontFamily: "Oswald" }}>349 ₽</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12">
          <p className="text-sm mb-4 font-medium uppercase tracking-widest" style={{ color: "rgba(255,180,100,0.6)" }}>Популярное сегодня</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {popularItems.map(item => (
              <div
                key={item.id}
                className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover-lift"
                style={{ background: "rgba(255,140,0,0.08)", border: "1px solid rgba(255,140,0,0.2)" }}
                onClick={() => addToCart(item)}
              >
                <span className="text-xl">🍔</span>
                <div>
                  <div className="text-sm font-semibold text-white whitespace-nowrap">{item.name}</div>
                  <div className="text-xs fire-text font-bold">{item.price} ₽</div>
                </div>
                <Icon name="Plus" size={14} className="text-orange-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* МЕНЮ */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 fire-text" style={{ fontFamily: "Oswald" }}>НАШЕ МЕНЮ</h2>
            <p style={{ color: "rgba(255,200,150,0.6)" }}>Готовим свежее каждый день</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center flex-wrap">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap"
                style={activeCategory === cat.id
                  ? { background: "linear-gradient(135deg, #FF3B00, #FF8C00)", color: "white", fontFamily: "Oswald" }
                  : { background: "rgba(255,140,0,0.08)", border: "1px solid rgba(255,140,0,0.2)", color: "#FF8C00", fontFamily: "Oswald" }
                }
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredMenu.map(item => (
              <div key={item.id} className="rounded-2xl overflow-hidden hover-lift" style={{ background: "var(--card-bg)", border: "1px solid rgba(255,140,0,0.15)" }}>
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full object-cover" style={{ height: "180px" }} />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {item.hot && <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "#FF3B00" }}>🔥 Острое</span>}
                    {item.popular && <span className="px-2 py-0.5 rounded-full text-xs font-bold text-black" style={{ background: "#FFD000" }}>★ Хит</span>}
                    {item.oldPrice && <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "#FF3B00" }}>СКИДКА</span>}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: "Oswald" }}>{item.name}</h3>
                  <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,200,150,0.6)" }}>{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black fire-text" style={{ fontFamily: "Oswald" }}>{item.price} ₽</span>
                      {item.oldPrice && <span className="ml-2 text-sm line-through" style={{ color: "rgba(255,180,100,0.4)" }}>{item.oldPrice} ₽</span>}
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                      style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)" }}
                    >
                      <Icon name="Plus" size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* АКЦИИ */}
      <section id="promos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 fire-text" style={{ fontFamily: "Oswald" }}>АКЦИИ И СКИДКИ</h2>
            <p style={{ color: "rgba(255,200,150,0.6)" }}>Горячие предложения каждый день</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promos.map(promo => (
              <div key={promo.id} className={`rounded-2xl p-6 bg-gradient-to-br ${promo.color} relative overflow-hidden hover-lift`} style={{ border: "1px solid rgba(255,140,0,0.25)" }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FFD000, transparent)", transform: "translate(30%, -30%)" }} />
                <span className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 text-white" style={{ background: "rgba(255,59,0,0.5)" }}>{promo.badge}</span>
                <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Oswald" }}>{promo.title}</h3>
                <p className="text-sm mb-3" style={{ color: "rgba(255,180,100,0.8)" }}>{promo.subtitle}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,150,0.7)" }}>{promo.desc}</p>
                <button className="mt-5 w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 text-white" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "Oswald" }}>
                  ВОСПОЛЬЗОВАТЬСЯ
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: "rgba(255,140,0,0.06)", border: "1px dashed rgba(255,140,0,0.3)" }}>
            <p className="mb-2 text-sm" style={{ color: "rgba(255,180,100,0.8)" }}>Промокод на первый заказ</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl" style={{ background: "rgba(255,59,0,0.15)", border: "1px solid rgba(255,59,0,0.4)" }}>
              <span className="text-2xl font-black tracking-widest fire-text" style={{ fontFamily: "Oswald" }}>ОГОНЬ10</span>
              <button className="transition-colors" style={{ color: "#FF8C00" }}>
                <Icon name="Copy" size={16} />
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: "rgba(255,180,100,0.5)" }}>Скидка 10% на первый заказ</p>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ДОСТАВКА */}
      <section id="delivery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 fire-text" style={{ fontFamily: "Oswald" }}>ДОСТАВКА</h2>
            <p style={{ color: "rgba(255,200,150,0.6)" }}>Горячее прямо к вашей двери</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              {[
                { icon: "Clock", title: "Время доставки", desc: "30 минут в среднем по городу. При задержке — компенсация купоном." },
                { icon: "MapPin", title: "Зона доставки", desc: "Доставляем в радиусе 15 км от наших ресторанов." },
                { icon: "Truck", title: "Бесплатная доставка", desc: "При заказе от 500 ₽. Ниже — стоимость 150 ₽." },
                { icon: "CreditCard", title: "Оплата", desc: "Наличными, картой или онлайн при оформлении заказа." },
                { icon: "Phone", title: "Приём заказов", desc: "С 10:00 до 23:00 ежедневно. Принимаем по телефону и онлайн." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl hover-lift" style={{ background: "var(--card-bg)", border: "1px solid rgba(255,140,0,0.15)" }}>
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)" }}>
                    <Icon name={icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1" style={{ fontFamily: "Oswald" }}>{title}</h3>
                    <p className="text-sm" style={{ color: "rgba(255,200,150,0.6)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,140,0,0.2)" }}>
              <img
                src="https://cdn.poehali.dev/projects/5e3ca7b8-e7a9-42ed-82e3-c3d2b879ffb0/files/623201cc-2ec9-4335-b625-2fcaae89f5c9.jpg"
                alt="Доставка"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div className="p-6" style={{ background: "var(--card-bg)" }}>
                <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "Oswald" }}>КАК ЗАКАЗАТЬ?</h3>
                <div className="space-y-3">
                  {["Выбери блюда из меню и добавь в корзину", "Укажи адрес доставки", "Оплати удобным способом", "Жди — везём горячим! 🔥"].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black text-black" style={{ background: "linear-gradient(135deg, #FF8C00, #FFD000)", marginTop: "2px" }}>{i + 1}</span>
                      <p className="text-sm" style={{ color: "rgba(255,200,150,0.8)" }}>{step}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)", fontFamily: "Oswald", letterSpacing: "0.05em" }}>
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* АДРЕСА */}
      <section id="branches" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 fire-text" style={{ fontFamily: "Oswald" }}>НАШИ АДРЕСА</h2>
            <p style={{ color: "rgba(255,200,150,0.6)" }}>Найди нас рядом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <div key={i} className="rounded-2xl p-6 hover-lift" style={{ background: "var(--card-bg)", border: "1px solid rgba(255,140,0,0.15)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,59,0,0.15)", border: "1px solid rgba(255,59,0,0.3)" }}>
                  <span className="text-xl">🔥</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-4" style={{ fontFamily: "Oswald" }}>{b.name}</h3>
                <div className="space-y-3">
                  {[
                    { icon: "MapPin", text: b.address },
                    { icon: "Train", text: b.metro },
                    { icon: "Clock", text: b.hours },
                  ].map(({ icon, text }) => (
                    <div key={icon} className="flex items-start gap-2.5">
                      <Icon name={icon} size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm" style={{ color: "rgba(255,200,150,0.8)" }}>{text}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5">
                    <Icon name="Phone" size={15} className="text-orange-400 flex-shrink-0" />
                    <a href={`tel:${b.phone}`} className="text-sm text-orange-300 hover:text-orange-100 transition-colors">{b.phone}</a>
                  </div>
                </div>
                <button className="w-full mt-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90" style={{ background: "rgba(255,140,0,0.12)", border: "1px solid rgba(255,140,0,0.25)", color: "#FF8C00", fontFamily: "Oswald" }}>
                  ПОСТРОИТЬ МАРШРУТ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 fire-text" style={{ fontFamily: "Oswald" }}>ОТЗЫВЫ</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">{"★★★★★".split("").map((s, i) => <span key={i} className="text-yellow-400 text-xl">{s}</span>)}</div>
              <span style={{ color: "rgba(255,200,150,0.6)" }}>4.9 из 5 (500+ отзывов)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl p-5 hover-lift" style={{ background: "var(--card-bg)", border: "1px solid rgba(255,140,0,0.15)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)" }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{r.name}</div>
                      <div className="text-xs" style={{ color: "rgba(255,180,100,0.5)" }}>{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">{"★".repeat(r.rating).split("").map((s, j) => <span key={j} className="text-yellow-400 text-sm">{s}</span>)}</div>
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,200,150,0.7)" }}>"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="py-10 px-4" style={{ borderTop: "1px solid rgba(255,140,0,0.15)", background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦫</span>
            <span className="font-bold text-xl fire-text" style={{ fontFamily: "Oswald" }}>Сытый бобёр</span>
          </div>
          <p className="text-sm text-center" style={{ color: "rgba(255,180,100,0.4)" }}>© 2025 Сытый бобёр. Все права защищены. Ежедневно 10:00–23:00</p>
          <a href="tel:+79991234567" className="text-sm text-orange-300/60 hover:text-orange-300 transition-colors">+7 (999) 123-45-67</a>
        </div>
      </footer>

      {/* КОРЗИНА */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md flex flex-col" style={{ background: "#1A1005", borderLeft: "1px solid rgba(255,140,0,0.2)" }}>
            <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(255,140,0,0.15)" }}>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Oswald" }}>КОРЗИНА</h2>
              <button onClick={() => setCartOpen(false)} className="transition-colors" style={{ color: "rgba(255,180,100,0.6)" }}>
                <Icon name="X" size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <span className="text-5xl mb-4">🛒</span>
                  <p style={{ color: "rgba(255,180,100,0.6)" }}>Корзина пуста</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,180,100,0.4)" }}>Добавьте что-нибудь вкусное!</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: "rgba(255,140,0,0.06)", border: "1px solid rgba(255,140,0,0.12)" }}>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">{item.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,180,100,0.6)" }}>{item.price} ₽ × {item.qty}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-orange-900/40" style={{ color: "rgba(255,180,100,0.8)" }}>
                        <Icon name="Minus" size={13} />
                      </button>
                      <span className="w-6 text-center font-bold text-white text-sm">{item.qty}</span>
                      <button onClick={() => addToCart(menuItems.find(m => m.id === item.id)!)} className="w-7 h-7 rounded-lg flex items-center justify-center text-white transition-colors" style={{ background: "rgba(255,59,0,0.4)" }}>
                        <Icon name="Plus" size={13} />
                      </button>
                    </div>
                    <div className="ml-3 font-black fire-text text-sm" style={{ fontFamily: "Oswald", minWidth: "60px", textAlign: "right" }}>
                      {item.price * item.qty} ₽
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5" style={{ borderTop: "1px solid rgba(255,140,0,0.15)" }}>
                <div className="flex justify-between items-center mb-4">
                  <span style={{ color: "rgba(255,200,150,0.7)" }}>Итого:</span>
                  <span className="text-3xl font-black fire-text" style={{ fontFamily: "Oswald" }}>{cartTotal} ₽</span>
                </div>
                {cartTotal < 500 && (
                  <p className="text-xs mb-3 text-center" style={{ color: "rgba(255,180,100,0.5)" }}>До бесплатной доставки: {500 - cartTotal} ₽</p>
                )}
                <button className="w-full py-4 rounded-2xl text-white font-black text-lg transition-all hover:opacity-90 hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)", fontFamily: "Oswald", letterSpacing: "0.05em" }}>
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {cartCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-bold shadow-2xl animate-pulse-glow md:hidden"
          style={{ background: "linear-gradient(135deg, #FF3B00, #FF8C00)", fontFamily: "Oswald" }}
        >
          <Icon name="ShoppingCart" size={20} />
          <span>{cartCount} блюда</span>
          <span className="ml-1 font-black">{cartTotal} ₽</span>
        </button>
      )}
    </div>
  );
}