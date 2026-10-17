"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowLeft,
  ChevronLeft,
  TreePine,
  Hammer,
  Sparkles,
  CheckCircle2,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BRAND, CATEGORIES, type Category } from "@/lib/catalog";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    category: string;
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    if (activeCategory === "all") return CATEGORIES;
    return CATEGORIES.filter((c) => c.id === activeCategory);
  }, [activeCategory]);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "categories", label: "الأقسام" },
    { id: "gallery", label: "المعرض" },
    { id: "contact", label: "تواصل معنا" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const whatsappLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "السلام عليكم، عايز أستفسر عن منتجاتكم 🪵"
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 group"
              aria-label="خشبة - الصفحة الرئيسية"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent/60 transition-all">
                <Image
                  src="/khashaba-logo.png"
                  alt="لوجو خشبة"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xl sm:text-2xl font-extrabold text-primary">
                  {BRAND.name}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
                  {BRAND.nameEn.toUpperCase()}
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-2">
              <a href={`tel:${BRAND.phone}`} className="hidden sm:flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{BRAND.phoneDisplay}</span>
                </Button>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex"
              >
                <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <MessageCircle className="w-4 h-4" />
                  واتساب
                </Button>
              </a>

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="القائمة"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src="/khashaba-logo.png"
                            alt="خشبة"
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xl font-extrabold text-primary">خشبة</span>
                      </div>
                    </div>
                    <nav className="flex flex-col p-4 gap-1">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className="text-right px-4 py-3 text-base font-semibold text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all"
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                    <div className="mt-auto p-4 border-t space-y-2">
                      <a href={`tel:${BRAND.phone}`} className="block">
                        <Button variant="outline" className="w-full gap-2">
                          <Phone className="w-4 h-4" />
                          <span dir="ltr">{BRAND.phoneDisplay}</span>
                        </Button>
                      </a>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                          <MessageCircle className="w-4 h-4" />
                          تواصل عبر واتساب
                        </Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section
        id="home"
        className="relative overflow-hidden wood-grain-bg border-b border-border/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* النصوص */}
            <div className="flex flex-col gap-4 sm:gap-6 animate-fade-up order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/15 border border-accent/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-accent-foreground">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                أثاث خشبي فاخر مصنوع بحب
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] text-primary">
                <span className="block">{BRAND.name}</span>
                <span className="block text-accent mt-1 sm:mt-2">{BRAND.tagline}</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {BRAND.description}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                <Button
                  size="lg"
                  className="gap-2 text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 flex-1 sm:flex-none"
                  onClick={() => scrollTo("categories")}
                >
                  تصفح المعرض
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-sm sm:text-base h-11 sm:h-12 px-5 sm:px-6 w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    اطلب قطعتك
                  </Button>
                </a>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 mt-2 border-t border-border/60">
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-primary">+{CATEGORIES.length}</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground mt-1">أقسام أثاث</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-primary">+{CATEGORIES.reduce((s, c) => s + c.images.length, 0)}</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground mt-1">تصميم متنوع</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-primary">100%</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground mt-1">خشب طبيعي</div>
                </div>
              </div>
            </div>

            {/* اللوجو - على الموبايل صورة بسيطة، على الديسكتوب كولاج */}
            <div className="relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.15s" }}>
              {/* نسخة الموبايل: لوجو دائري بسيط */}
              <div className="lg:hidden flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-background">
                  <Image
                    src="/khashaba-logo.png"
                    alt="لوجو خشبة"
                    fill
                    sizes="(max-width: 1024px) 256px, 0px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* نسخة الديسكتوب: كولاج كامل */}
              <div className="hidden lg:block relative aspect-square max-w-md mx-auto">
                {/* Big logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-background ring-offset-4 ring-offset-accent/20">
                    <Image
                      src="/khashaba-logo.png"
                      alt="لوجو خشبة"
                      fill
                      sizes="400px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating preview cards - بس على الديسكتوب */}
                <FloatingImageCard
                  src={CATEGORIES[0].images[0]}
                  alt={CATEGORIES[0].name}
                  className="absolute top-4 -right-4 w-36 h-36"
                  rotation={6}
                />
                <FloatingImageCard
                  src={CATEGORIES[5].images[0]}
                  alt={CATEGORIES[5].name}
                  className="absolute bottom-4 -left-4 w-36 h-36"
                  rotation={-6}
                />
                <FloatingImageCard
                  src={CATEGORIES[7].images[0]}
                  alt={CATEGORIES[7].name}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-32"
                  rotation={-3}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-16 sm:py-24 bg-card/40 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-sm font-semibold text-accent-foreground mb-4">
              <TreePine className="w-4 h-4 text-accent" />
              من نحن
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              قصة <span className="text-accent">خشبة</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              من قلب الورشة إلى بيتك، نختار أجود أنواع الخشب ونصنعها بأيدٍ مصرية ماهرة لنقدم لك قطعة أثاث ليست مجرد أداة، بل قطعة فنية تدوم مع الزمن.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <FeatureCard
              icon={<TreePine className="w-7 h-7" />}
              title="خامات أصلية"
              desc="نختار أجود أنواع الخشب الطبيعي: زان، جوز، بلط، رماد."
            />
            <FeatureCard
              icon={<Hammer className="w-7 h-7" />}
              title="صناعة يدوية"
              desc="كل قطعة تمر بمراحل دقيقة من النجارة المصرية الأصيلة."
            />
            <FeatureCard
              icon={<Sparkles className="w-7 h-7" />}
              title="تصميم مودرن"
              desc="نمزج بين الفخامة الكلاسيكية واللمسات العصرية."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-7 h-7" />}
              title="ضمان الجودة"
              desc="نتفاخر بمتانة منتجاتنا ونضمن رضاك التام."
            />
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section id="categories" className="py-16 sm:py-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-sm font-semibold text-accent-foreground mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              أقسامنا
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              تصفح <span className="text-accent">الأقسام</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              اختر القسم اللي يهمك وشوف أحدث تصميماتنا. كل قسم مليان أفكار ممكن ننفذها لك على مقاسك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onViewGallery={() => {
                  setActiveCategory(cat.id);
                  scrollTo("gallery");
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section id="gallery" className="py-16 sm:py-24 bg-card/40 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-sm font-semibold text-accent-foreground mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              المعرض
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              معرض <span className="text-accent">الصور</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              شغالين بيهم دلوقتي؟ اختر القسم من تحت وشوف الصور الحقيقية لأعمال مشابهة للي نقدر نعمله لك.
            </p>
          </div>

          {/* Category filter pills - scrollable على الموبايل */}
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <FilterPill
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            >
              الكل
            </FilterPill>
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="ml-1">{cat.icon}</span>
                {cat.name}
              </FilterPill>
            ))}
          </div>

          {/* Galleries */}
          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <CategoryGallery
                key={cat.id}
                category={cat}
                onImageClick={(src, alt) =>
                  setLightboxImage({ src, alt, category: cat.name })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 sm:py-20 wood-pattern text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-background">
              جاهز تبدأ قطعتك؟
            </h2>
            <p className="text-base sm:text-lg text-background/85 mb-8 leading-relaxed">
              كل ما عليك تختار التصميم اللي عجبك، وتواصل معايا، وهنناقش التفاصيل والمقاسات والخامات. شغلنا بيبدأ من الفكرة وينتهي عند باب بيتك.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BRAND.phone}`}>
                <Button size="lg" variant="secondary" className="gap-2 h-12 px-6 text-base">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{BRAND.phoneDisplay}</span>
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 h-12 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90">
                  <MessageCircle className="w-5 h-5" />
                  تواصل واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact / Footer ===== */}
      <footer id="contact" className="mt-auto bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-background/20 shrink-0">
                  <Image
                    src="/khashaba-logo.png"
                    alt="خشبة"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-2xl font-extrabold">{BRAND.name}</span>
                  <span className="text-[10px] sm:text-xs text-primary-foreground/70 tracking-wider">
                    {BRAND.nameEn.toUpperCase()}
                  </span>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                {BRAND.tagline}. أثاث خشبي مصنوع بإتقان وحب في مصر.
              </p>
              <div className="flex gap-2 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary-foreground/15 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label="واتساب"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="w-11 h-11 rounded-full bg-primary-foreground/15 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label="اتصال"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary-foreground/15 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label="فيسبوك"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary-foreground/15 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label="إنستجرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
              <h3 className="font-bold text-base mb-2">روابط سريعة</h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/85">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="hover:text-accent transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="font-bold text-base mb-2">الأقسام</h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/85">
                {CATEGORIES.slice(0, 5).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat.id);
                        scrollTo("gallery");
                      }}
                      className="hover:text-accent transition-colors text-right"
                    >
                      {cat.icon} {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="font-bold text-base mb-2">معلومات التواصل</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/85">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                  <a
                    href={`tel:${BRAND.phone}`}
                    dir="ltr"
                    className="hover:text-accent transition-colors"
                  >
                    {BRAND.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    واتساب: <span dir="ltr">{BRAND.phoneDisplay}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                  <span>{BRAND.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                  <span>{BRAND.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-primary-foreground/75">
            <p>
              © {new Date().getFullYear()} {BRAND.name}. جميع الحقوق محفوظة.
            </p>
            <p className="flex items-center gap-1">
              صُنع بـ <span className="text-accent">♥</span> في مصر
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button - صغير ومكانه بعيد عن المحتوى */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 left-3 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="تواصل واتساب"
      >
        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
      </a>

      {/* Lightbox */}
      <Dialog
        open={!!lightboxImage}
        onOpenChange={(open) => !open && setLightboxImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 border-border">
          <DialogTitle className="sr-only">
            {lightboxImage?.category} - صورة من معرض خشبة
          </DialogTitle>
          <DialogDescription className="sr-only">
            صورة من قسم {lightboxImage?.category} في معرض خشبة
          </DialogDescription>
          {lightboxImage && (
            <div className="relative w-full aspect-[4/3] bg-black">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">{lightboxImage.category}</p>
                <p className="text-xs text-white/70">معرض خشبة - أثاث خشبي فاخر</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ============ Components ============ */

function FloatingImageCard({
  src,
  alt,
  className,
  rotation = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-background",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="144px"
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="h-full border-border/60 hover:border-accent/40 hover:shadow-lg transition-all overflow-hidden">
      <CardContent className="p-6 space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );
}

function CategoryCard({
  category,
  onViewGallery,
}: {
  category: Category;
  onViewGallery: () => void;
}) {
  return (
    <Card
      className="group overflow-hidden border-border/60 hover:border-accent/50 hover:shadow-xl transition-all cursor-pointer h-full"
      onClick={onViewGallery}
    >
      {/* Image grid: أول صورة كبيرة + 2 صور صغيرة */}
      <div className="grid grid-cols-3 grid-rows-2 gap-0.5 aspect-[3/2] bg-secondary">
        <div className="col-span-2 row-span-2 relative overflow-hidden">
          <Image
            src={category.images[0]}
            alt={`${category.name} - التصميم الرئيسي`}
            fill
            sizes="(max-width: 640px) 66vw, 22vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {/* شارة عدد الصور فوق الصورة */}
          <div className="absolute top-2 right-2 z-10">
            <span className="text-[10px] sm:text-xs font-semibold bg-background/90 backdrop-blur-sm text-primary px-2 sm:px-2.5 py-1 rounded-full shadow-sm">
              {category.images.length} صور
            </span>
          </div>
        </div>
        {category.images.slice(1, 3).map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
          >
            <Image
              src={img}
              alt={`${category.name} - تصميم ${i + 2}`}
              fill
              sizes="(max-width: 640px) 33vw, 11vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
        ))}
      </div>
      <CardContent className="p-4 sm:p-5 space-y-2 sm:space-y-3">
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl shrink-0">{category.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary leading-tight">
              {category.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{category.nameEn}</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {category.description}
        </p>
        <div className="pt-1">
          <Button
            size="sm"
            variant="ghost"
            className="gap-1 text-primary hover:bg-primary hover:text-primary-foreground w-full justify-center h-9 sm:h-10"
            onClick={(e) => {
              e.stopPropagation();
              onViewGallery();
            }}
          >
            شوف المعرض
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border whitespace-nowrap min-h-9",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-md"
          : "bg-background text-foreground/80 border-border hover:border-accent/50 hover:text-primary"
      )}
    >
      {children}
    </button>
  );
}

function CategoryGallery({
  category,
  onImageClick,
}: {
  category: Category;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-start justify-between gap-3 border-b border-border pb-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl sm:text-3xl font-extrabold text-primary flex items-center gap-2">
            <span className="text-2xl sm:text-3xl shrink-0">{category.icon}</span>
            <span className="truncate">{category.name}</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{category.nameEn}</p>
        </div>
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
            `السلام عليكم، عايز أستفسر عن ${category.name} 🪵`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button
            size="sm"
            variant="outline"
            className="gap-1 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground h-9 px-3"
          >
            <MessageCircle className="w-4 h-4" />
            اطلب زيها
          </Button>
        </a>
      </div>
      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
        {category.description}
      </p>
      {/* على الموبايل: عمودين، على الديسكتوب: 3 أعمدة مع الصورة الأولى كبيرة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {category.images.map((img, i) => (
          <button
            key={i}
            onClick={() => onImageClick(img, `${category.name} - تصميم ${i + 1}`)}
            className={cn(
              "group relative overflow-hidden rounded-lg sm:rounded-xl bg-secondary aspect-square image-hover-zoom ring-1 ring-border hover:ring-2 hover:ring-accent transition-all",
              i === 0 && "sm:col-span-2 sm:row-span-2"
            )}
          >
            <Image
              src={img}
              alt={`${category.name} - تصميم ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3">
              <span className="text-[10px] sm:text-sm font-semibold text-white">
                {category.name} #{i + 1}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
