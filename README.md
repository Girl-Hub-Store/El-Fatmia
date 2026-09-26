# El-Fatimia — GitHub Pages

هذه النسخة جاهزة للنشر على GitHub Pages.

## النشر
1. أنشئ Repository جديد على GitHub.
2. ارفع كل محتويات هذا المجلد إلى الفرع `main`.
3. من Settings → Pages اختر GitHub Actions أو Deploy from branch حسب إعداد المستودع.

> لا تفتح `index.html` بالنقر المزدوج كطريقة اختبار أساسية؛ الموقع يستخدم ES Modules وملفات CDN، والأفضل اختباره عبر GitHub Pages أو سيرفر محلي.

## تشغيل محلي
إذا كان Python مثبتًا:
`python -m http.server 8080`
ثم افتح `http://localhost:8080`.
