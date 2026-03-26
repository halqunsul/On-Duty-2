# OnDuty V64.2.5 APK Base v1

هذا الملف هو **المرجع الرسمي الأول** لتحويل النسخة المعتمدة:
`OnDuty_V64_2_5_Final_Report_Responsive_Scaled_Reference`
إلى APK باستخدام Capacitor + Android.

## ما الذي تم الحفاظ عليه 1:1 ؟
جميع ملفات الويب الأصلية موجودة كما هي داخل المجلد `web/`:
- `index.html`
- `app.bundle.js`
- `style.css`
- `manifest.json`
- `sw.js`
- `assets/`

## ما الذي أضيف فوق النسخة الأصلية؟
- `package.json`
- `capacitor.config.ts`
- `tsconfig.json`
- `.github/workflows/android-apk.yml`
- `.gitignore`

## الهدف من هذه النسخة
- تبقى نسخة الويب الأصلية مرجعًا ثابتًا
- نضيف فوقها فقط طبقة APK/Android
- أي تعديل لاحق يكون على هذا المرجع ويصدر كنسخة جديدة

## أوامر العمل بعد رفعها إلى GitHub
```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

## ملاحظات مهمة
- لا تعدل ملفات `web/` إلا إذا كان التعديل مطلوبًا ومقصودًا في منطق التطبيق أو الواجهة.
- أي إصلاح APK لاحق يفضّل أن يكون في طبقة Capacitor/Android أولاً.
- هذه النسخة لا تحتوي على مجلد `android/` جاهز لأن إنشاؤه يتم محليًا أو عبر GitHub Actions بعد تثبيت الحزم.

## إصداراتنا المرجعية
- Base v1 = هذه النسخة
- v2 / v3 / v4 ... = تصحيحات لاحقة حسب الصور والمشاكل التي تظهر أثناء التجربة
