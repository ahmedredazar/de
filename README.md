# DEZN Portfolio — Supabase Edition

## طريقة المحتوى الجديدة
المشاريع والمعرفة والكتب تُقرأ مباشرة من **Supabase**. لا تحتاج لتعديل ملفات HTML عند إضافة محتوى جديد.

### 1) إعداد Supabase
1. افتح مشروعك في Supabase.
2. افتح **SQL Editor** وشغّل الملف `supabase-schema.sql`.
3. أنشئ Storage Bucket باسم `dezn-media` واجعله Public إذا كنت ستستخدم روابط الملفات العامة.
4. افتح `supabase-config.js` وضع:
   - `url`: رابط مشروع Supabase.
   - `anonKey`: مفتاح `anon/public` فقط.
   **ممنوع وضع Service Role Key داخل الموقع.**

### 2) إضافة مشروع
من Supabase > Table Editor > `projects` أضف صفًا جديدًا. أهم الحقول:
- `slug`: اسم إنجليزي فريد مثل `villa-01`
- `title_ar`, `title_en`
- `cat_label_ar`, `cat_label_en`
- `category`: `residential` أو `commercial` أو `interior` أو `public` أو `landscape`
- `meta_ar`, `meta_en`
- `summary_ar`, `summary_en`
- `specs`: JSON مثل `{"المساحة":"450 م²","السنة":"2026","النوع":"فيلا"}`
- `body_ar`, `body_en`: محتوى المشروع الكامل بصيغة HTML بسيطة
- `images`: JSON Array من روابط الصور العامة
- `author`: اسم الناشر

### 3) إضافة موضوع معرفة
من جدول `knowledge` أضف:
- `slug`
- `label_ar`, `label_en`
- `title_ar`, `title_en`
- `desc_ar`, `desc_en`
- `body_ar`, `body_en`
- `cover_url` اختياري
- `author`

عند الضغط على الموضوع من صفحة المعرفة يفتح `knowledge-detail.html` بالتفاصيل الكاملة.

### 4) إضافة كتاب
من جدول `books` أضف:
- اسم الكتاب بالعربي والإنجليزي
- المؤلف
- السنة
- وصف مختصر
- `cover_url` اختياري
- `download_url` لرابط PDF أو رابط التحميل

### 5) الصور والملفات
ارفع الصور وملفات PDF إلى Storage داخل Supabase، ثم استخدم **Public URL** في `images` / `cover_url` / `download_url`.

## ما تم الحفاظ عليه
- صفحة التواصل كما هي.
- صفحة أحمد رضا كما هي.
- نفس التصميم والهوية السوداء.
- نظام تفاصيل المشاريع والمعرفة.
- الصفحة الرئيسية تعرض المحتوى باختصار.
- صفحة العمارة لم تعد ضمن التنقل الرئيسي.

## الشعار
تم استبدال شعار DEZN بالشعار الذي تم رفعه، ويُستخدم في الهيدر والصفحات والـ footer والواجهة الرئيسية.

## ملاحظة مهمة
إذا لم تضع بيانات Supabase في `supabase-config.js`، سيستخدم الموقع البيانات المحلية الموجودة في ملفات `projects-data.js` و`knowledge-data.js` و`books-data.js` كنسخة احتياطية، لذلك الموقع لن يتوقف أثناء الإعداد.


## Bilingual content
- Arabic pages use Cairo and RTL.
- English pages use Inter and LTR.
- For Supabase, fill both Arabic and English fields (`title_ar/title_en`, `body_ar/body_en`, etc.).
- Project specs support `specs` and `specs_en` JSON objects.
- The DEZN logo is loaded from `logo-dezn.jpg`.


## Typography
واجهة الموقع عربية فقط. الكلمات الإنجليزية داخل المحتوى العربي تستخدم Cormorant Garamond Serif تلقائيًا.
