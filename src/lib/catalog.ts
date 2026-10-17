/**
 * بيانات معرض خشبة
 * كل قسم فيه: المعرّف، الاسم بالعربي، الاسم بالإنجليزي، الوصف، وقائمة الصور
 * الصور تم جلبها من Pinterest
 */

export type Category = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  /** أيقونة وصفية بسيطة (emoji) */
  icon: string;
  images: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "bookcases",
    name: "مكتبات",
    nameEn: "Bookcases & Bookshelves",
    description:
      "مكتبات خشبية بتصميمات مودرن وكلاسيك تناسب كل المساحات، من المكتبات الحائطية للرفوف الطويلة الطالعة للأعلى. كل مكتبة تُصنع بمقاسات حسب الطلب لتعظيم الاستفادة من المساحة المتاحة لديك.",
    icon: "📚",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dad69330479b.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7652e0656440.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/494fca9edaaa.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a492d380c0fd.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/340913661f48.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1adf1d29c9b9.jpg",
    ],
  },
  {
    id: "consoles",
    name: "كونسولات",
    nameEn: "Consoles",
    description:
      "كونسولات أنيقة للمدخل والصالة، بتصميمات بسيطة تعكس فخامة الخشب الطبيعي ولمساته الدافئة. مثالية لعرض التحف والإكسسوارات أو كقطعة بصرية تجذب الانتباه عند دخول البيت.",
    icon: "🪞",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/96f591e26c3c.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7c2fbbbe225e.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/42e0aa59e943.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c0e23e542ba0.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5e9e857a75dc.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3979fdaa8541.jpg",
    ],
  },
  {
    id: "desks",
    name: "مكاتب",
    nameEn: "Desks",
    description:
      "مكاتب عمل ودراسة عملية وأنيقة، مصممة لراحة الاستخدام الطويل مع مساحات تخزين ذكية للأسلاك والأوراق. متوفرة بتصميمات مختلفة من المكتب الكلاسيكي للمكتب المودرن المفتوح.",
    icon: "💻",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ae87f8b9e6d7.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e60309ddbf33.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0daa662df0fc.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/722cf0663b4d.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e82b9c70ebf4.webp",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7809379db845.jpg",
    ],
  },
  {
    id: "doors",
    name: "أبواب",
    nameEn: "Doors",
    description:
      "أبواب خشبية فاخرة بتصميمات داخلية وخارجية، تجمع بين المتانة والجمال والأمان. نستخدم خشب الزان والجوز والبلط المختار بعناية، مع إمكانية إضافة نقوش يدوية أو زجاج ديكور.",
    icon: "🚪",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6121f8af3293.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2cf75720cf1a.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fa9fe01eef93.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/afd89cab1f00.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b50d020ff809.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8673420f5a31.jpg",
    ],
  },
  {
    id: "floating_shelves",
    name: "رفوف معلقة",
    nameEn: "Floating Shelves",
    description:
      "رفوف خشبية معلقة بتصميم عصري تضيف لمسة جمالية وعملية لأي حائط في بيتك. تركيب نظيف بدون مسامير ظاهرة، يتحمل أوزان ثقيلة، ومثالية للكتب والنباتات والإكسسوارات.",
    icon: "📐",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/339b562b31f7.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2a3b484109bb.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1b654f6bd7b3.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a50b63514775.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/90518e2cbc42.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5a5f269989e0.jpg",
    ],
  },
  {
    id: "modern_tables",
    name: "ترابيزات مودرن",
    nameEn: "Modern Tables",
    description:
      "ترابيزات سفرة وقهوة بتصميمات مودرن، تجمع بين الفن والوظيفة لتكون قلب البيت. متوفرة بمقاسات مختلفة تناسب الشقق الصغيرة والصالات الكبيرة، مع إمكانية التخصيص الكامل.",
    icon: "🍽️",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6143565d0289.jpeg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a7b6ae13c1d8.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2423fd9fe956.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e59e33a5a0b7.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/eff99d97f7a7.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8b6cc66cbba3.jpg",
    ],
  },
  {
    id: "partitions",
    name: "فواصل (بارتشنز)",
    nameEn: "Partitions",
    description:
      "فواصل خشبية لتقسيم المساحات بأناقة، تمنح خصوصية دون أن تفقد الإحساس بالاتساع. تصاميم مسطرة وشرائحية تعمل كقطعة فنية مستقلة بحد ذاتها وتضيف عمق للمساحة.",
    icon: "🪟",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d74f29837018.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5fb4255844eb.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bebc2e1ce491.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5e14bef7b55b.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/773bafee8e10.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d23a2400788a.jpg",
    ],
  },
  {
    id: "tv_units",
    name: "وحدات تلفزيون",
    nameEn: "TV Units",
    description:
      "وحدات تلفزيون خشبية بتصميمات عصرية تناسب كل أحجام الشاشات مع مساحات تخزين كافية للأجهزة والريموت والإكسسوارات. متوفرة بوحدات معلقة وأرضية وبأنظمة كابلات مخفية.",
    icon: "📺",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2b3b9f6a50ea.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fdeb667fc03b.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca44bc66a1b9.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/52b7c808ed52.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e6ccc6505693.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29530b79e017.webp",
    ],
  },
  {
    id: "wall_cladding",
    name: "تكسية جدران",
    nameEn: "Wall Cladding",
    description:
      "تكسية جدران خشبية تحوّل أي مساحة عادية إلى تحفة معمارية دافئة وفخمة. مثالية لجدار التلفزيون أو المدخل أو جدران المكاتب والكافيهات، متوفرة بنقوش هندسية وخطوط أفقية.",
    icon: "🪵",
    images: [
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ebe081e6632a.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c2a54202ea7a.jpg",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/242e4f43d6bb.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/465c364e166b.webp",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5340154b8ebe.png",
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5aea594f9ecc.jpg",
    ],
  },
];

// معلومات البراند
export const BRAND = {
  name: "خشبة",
  nameEn: "Khashaba",
  phone: "01070386575",
  phoneDisplay: "0107 038 6575",
  whatsapp: "201070386575", // بصيغة دولية بدون +
  email: "info@khashaba.com",
  tagline: "نصنع لك الأثاث الذي يدوم",
  description:
    "خشبة براند متخصص في صناعة الأثاث الخشبي الفاخر بتصميمات تجمع بين الأصالة والحداثة. كل قطعة تخرج من ورشتنا تحمل لمسة حرفية فريدة وإتقان يدوي يضمن لها البقاء جيلاً بعد جيل.",
  address: "القاهرة، مصر",
  workingHours: "السبت - الخميس: 10 ص - 9 م",
  facebook: "https://www.facebook.com/profile.php?id=61594437931625",
  instagram: "https://www.instagram.com/khashaba.wood/?hl=en",
} as const;
