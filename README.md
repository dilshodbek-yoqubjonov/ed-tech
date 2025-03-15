# Kurs Boshqaruv Tizimi API

Bu loyiha kurslarni boshqarish uchun yaratilgan backend API bo‘lib, u foydalanuvchilar, kurslar, o‘qituvchilar va enrolment jarayonlarini boshqarishga mo‘ljallangan. API RESTful arxitekturaga asoslangan bo‘lib, **Node.js**, **Express.js**, **Prisma**, **Redis** va **Google Gemini AI API** texnologiyalaridan foydalanadi.

## 📌 Texnologiyalar
- **Node.js** – Server tomon kodni ishlatish
- **Express.js** – RESTful API yaratish
- **Prisma** – Ma'lumotlar bazasini boshqarish (ORM)
- **Redis** – Kesh (cache) tizimi
- **Google Gemini API** – AI yordamida tahlil qilish
- **MySQL/PostgreSQL** – Ma’lumotlar bazasi

## 📂 Loyiha Tuzilishi
```
📁 project-root/
 ├── 📁 config/               # Konfiguratsiyalar (Prisma, Redis)
 ├── 📁 controllers/          # API controller-lari
 ├── 📁 middlewares/          # Middleware funksiyalar
 ├── 📁 routes/               # API yo‘nalishlari (Router)
 ├── 📁 views/                # EJS fayllar (agar mavjud bo‘lsa)
 ├── 📁 utils/                # Yordamchi funksiyalar
 ├── 📄 server.js             # Asosiy server fayli
 ├── 📄 package.json          # NPM bog‘liqliklari
 ├── 📄 prisma.schema         # Prisma modeli
```

## 🚀 O‘rnatish

### 1. Bog‘liqliklarni o‘rnatish
```bash
npm install
```

### 2. Ma’lumotlar bazasini sozlash
`.env` faylni yaratib, quyidagi sozlamalarni kiriting:
```
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
REDIS_URL="redis://localhost:6379"
GEMINI_API_KEY="your_google_gemini_api_key"
```

Prisma migratsiyalarini ishlating:
```bash
npx prisma migrate dev
```

### 3. Serverni ishga tushirish
```bash
npm run dev
```

## 🔥 Asosiy API Yo‘nalishlari

Loyiha API routerlari haqida batafsil ma’lumot **PDF hujjatda** keltiriladi.

**Umumiy yo‘nalishlar:**
- **`/api/courses`** – Kurslar bilan ishlash
- **`/api/users`** – Foydalanuvchilar bilan ishlash
- **`/api/teachers`** – O‘qituvchilar bilan ishlash
- **`/api/enrollment`** – Kursga yozilish tizimi
- **`/api/analytics`** – AI yordamida kurs tahlillari

## 🎯 AI Support
Loyihada Google Gemini API yordamida AI Support funksiyasi qo‘shilgan. Chat orqali savollar berish va AI javoblarini Redis keshida 20 soniya davomida saqlash imkoniyati mavjud.

## ⚡ Qo‘shimcha
- **Xatolarni qayta ishlash**: Har bir routerda try/catch bloklari qo‘llangan.
- **Middleware**: Token orqali autentifikatsiya va ruxsatlarni tekshirish.
- **Kesh (Cache)**: Redis orqali ma’lumotlarni vaqtinchalik saqlash.

## 📜 Litsenziya
MIT Litsenziyasi.

## 👨‍💻 Muallif
- **Backend Developer**: [Dilshodbek Yoqubjonov]


