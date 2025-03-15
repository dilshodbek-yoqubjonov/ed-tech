# Kurs Boshqaruv Tizimi API

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
 📁 src/
      ├── 📁 config/               
      ├── 📁 controllers/         
      ├── 📁 middlewares/         
      ├── 📁 routes/              
      ├── 📁 utils/                
      ├── 📄 server.js             
 ├── 📄 package.json       
```

## O‘rnatish

### 1. Bog‘liqliklarni o‘rnatish
```bash
npm i
```

### 2. Ma’lumotlar bazasini sozlash
`.env` faylni yaratib, quyidagi sozlamalarni kiriting:
```
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
GEMINI_API_KEY="your_google_gemini_api_key"
JWT_SECRET_KEY="secret"
PORT=
```

Prisma migratsiyalarini ishlating:
```bash
npx prisma migrate dev
```
yoki
```bash
npm run prisma-migrate
```

### 3. Serverni ishga tushirish nodemon bilan
```bash
npm run dev
```

## 🔥 Asosiy API Yo‘nalishlari

Loyiha API routerlari haqida batafsil ma’lumot **PDF hujjatda** keltiriladi.

**Umumiy yo‘nalishlar:**
- **`/courses`** – Kurslar bilan ishlash
- **`/users`** – Foydalanuvchilar bilan ishlash
- **`/teachers`** – O‘qituvchilar bilan ishlash
- **`/enrollment`** – Kursga yozilish tizimi
- **`/analytics`** – Kurs tahlillari
- **`/ai`** – Support chat uchun AI support

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


