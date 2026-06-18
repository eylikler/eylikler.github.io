/*
 * LIDA web sitesi çoklu dil desteği.
 *
 * Uygulamadaki 14 dil burada tanımlı. Şu an TR ve EN tam dolu;
 * diğer diller boş obje olarak duruyor ve eksik anahtarlar otomatik
 * olarak EN'e (fallback) düşer. Bir dili tamamlamak için aşağıdaki
 * ilgili obje içine EN ile aynı anahtarları çevirip yazman yeterli.
 *
 * Yeni metin eklerken: index.html'e data-i18n="grup.anahtar" ekle,
 * sonra TR ve EN objelerine aynı anahtarı yaz.
 */

// Dil meta verisi — seçici menüde gösterilen ad ve yazım yönü.
// code: tarayıcı dil kodu eşleşmesi için kullanılır.
const LANG_META = [
  { code: 'tr',    label: 'TR', name: 'Türkçe',    dir: 'ltr' },
  { code: 'en',    label: 'EN', name: 'English',   dir: 'ltr' },
  { code: 'es',    label: 'ES', name: 'Español',   dir: 'ltr' },
  { code: 'ar',    label: 'AR', name: 'العربية',   dir: 'rtl' },
  { code: 'de',    label: 'DE', name: 'Deutsch',   dir: 'ltr' },
  { code: 'fr',    label: 'FR', name: 'Français',  dir: 'ltr' },
  { code: 'ru',    label: 'RU', name: 'Русский',   dir: 'ltr' },
  { code: 'ja',    label: 'JA', name: '日本語',     dir: 'ltr' },
  { code: 'zh',    label: 'ZH', name: '中文',       dir: 'ltr' },
  { code: 'ko',    label: 'KO', name: '한국어',     dir: 'ltr' },
  { code: 'pt-BR', label: 'PT', name: 'Português',  dir: 'ltr' },
  { code: 'hi',    label: 'HI', name: 'हिन्दी',      dir: 'ltr' },
  { code: 'it',    label: 'IT', name: 'Italiano',  dir: 'ltr' },
];

const TRANSLATIONS = {
  tr: {
    'meta.title': 'LIDA — Lighting Inspection & Diagnostic App',
    'meta.description': 'LIDA ile akıllı telefonunuzun kamerasını profesyonel bir ışık ölçüm cihazına dönüştürün. Flicker, CCT, Lux ve CRI ölçümü — tamamen offline.',

    'nav.features': 'Özellikler',
    'nav.fullInspection': 'Tam Denetim',
    'nav.howItWorks': 'Nasıl Çalışır',
    'nav.screenshots': 'Ekran Görüntüleri',
    'nav.pricing': 'Fiyatlandırma',

    'hero.badge': 'Tamamen Offline &bull; IEEE 1789 Uyumlu',
    'hero.title': 'Profesyonel Işık Ölçümü, <span class="highlight">Cebinizde</span>',
    'hero.desc': 'LIDA, akıllı telefonunuzun kamerasını profesyonel bir ışık ölçüm cihazına dönüştürür. Flicker, CCT, Lux ve CRI &mdash; tek bir uygulamada, internet gerektirmeden.',
    'hero.imgAlt': 'LIDA Ana Ekran',

    'features.label': 'Özellikler',
    'features.title': '4 Profesyonel Ölçüm, Tek Uygulama',
    'features.subtitle': 'Aydınlatma kalitesini değerlendirmek için ihtiyacınız olan her şey, telefonunuzda.',
    'features.flicker.title': 'Flicker Algılama',
    'features.flicker.desc': 'Rolling shutter FFT analizi ile ışık titreşimini tespit edin. Frekans, yüzde ve Flicker Index ölçümü.',
    'features.cct.title': 'CCT &mdash; Renk Sıcaklığı',
    'features.cct.desc': 'Işık kaynağının Kelvin cinsinden renk sıcaklığını ölçün. Sıcak beyaz, nötr veya gün ışığı.',
    'features.lux.title': 'Lux &mdash; Aydınlık Seviyesi',
    'features.lux.desc': 'Kamera EXIF verileri üzerinden ortamınızdaki aydınlatma şiddetini hesaplayın.',
    'features.lux.tag': 'EXIF Analizi',
    'features.cri.title': 'CRI &mdash; Renk İşleme İndeksi',
    'features.cri.desc': 'Işığın renkleri ne kadar doğal gösterdiğini 0-100 ölçeğinde değerlendirin.',
    'features.cri.tag': '0 &ndash; 100 Puan',

    'fi.badge': 'Yeni Özellik &bull; Kapsamlı Denetim',
    'fi.title': 'Tek akışta <span class="highlight">profesyonel denetim raporu.</span>',
    'fi.desc': '<strong>Tam Denetim</strong> modu, aydınlatma denetimini 4 adımlık rehberli bir akışa dönüştürür. Flicker, Lux, CCT ve CRI ölçümlerinin dördünü tek oturumda tamamlar; sonucu EN 12464-1 ve IEEE 1789-2015 standartlarıyla otomatik karşılaştırıp imzalı PDF rapor oluşturur.',
    'fi.highlight1': 'Operatör, lokasyon, GPS ve saha tipi tek formda kayıt altına alınır',
    'fi.highlight2': 'Her adımda ölçüm kilitlenir; tekrar çekim ve yanlışlık riski kalmaz',
    'fi.highlight3': 'Otomatik GEÇTİ / KALDI kararı ve standartlara atıflı öneri listesi',
    'fi.highlight4': 'Paylaşılabilir, arşivlenebilir profesyonel PDF çıktı',
    'fi.imgAlt': 'Tam Denetim özet raporu',
    'fi.flowTitle': '4 Adımda Denetim Akışı',
    'fi.flowSubtitle': 'Hazırlıktan standart uyumlu rapora kadar tek ekranda.',
    'fi.step0.badge': 'Hazırlık',
    'fi.step0.title': 'Denetim Bilgileri',
    'fi.step0.desc': 'Operatör, ölçüm yeri, saha tipi, GPS koordinatı ve notlar.',
    'fi.step0.alt': 'Denetim hazırlık formu',
    'fi.step1.badge': 'Adım 1',
    'fi.step1.title': 'Flicker Ölçümü',
    'fi.step1.desc': 'Rolling shutter FFT ile titreşim frekansı ve yüzdesi.',
    'fi.step1.alt': 'Flicker ölçümü',
    'fi.step2.badge': 'Adım 2',
    'fi.step2.title': 'Aydınlık Düzeyi',
    'fi.step2.desc': 'EXIF tabanlı aydınlık (lux) ölçümü ve sensör kontrolü.',
    'fi.step2.alt': 'Lux ölçümü',
    'fi.step3.badge': 'Adım 3',
    'fi.step3.title': 'CCT &amp; CRI',
    'fi.step3.desc': 'Renk sıcaklığı (Kelvin) ve renk işleme indeksi (Ra).',
    'fi.step3.alt': 'CCT ve CRI ölçümü',
    'fi.step4.badge': 'Adım 4',
    'fi.step4.title': 'Özet &amp; Rapor',
    'fi.step4.desc': 'Standart karşılaştırması, öneriler ve PDF çıktısı.',
    'fi.step4.alt': 'Özet ve öneriler',

    'how.label': 'Nasıl Çalışır?',
    'how.title': '3 Basit Adım',
    'how.subtitle': 'Karmaşık cihazlara gerek yok. Kameranızı açın ve ölçüme başlayın.',
    'how.step1.title': 'Kamerayı Açın',
    'how.step1.desc': 'Işık kaynağını kameranızla hedefleyin. LIDA otomatik olarak hazırlanıyor.',
    'how.step2.title': 'Ölçümü Seçin',
    'how.step2.desc': 'Flicker, CCT, Lux veya CRI &mdash; istediğiniz ölçüm türünü seçin veya hepsini birden çalıştırın.',
    'how.step3.title': 'Sonucu Alın',
    'how.step3.desc': 'Anlık sonuçları görün, geçmişe kaydedin ve profesyonel raporlar olarak paylaşın.',

    'shots.label': 'Önizleme',
    'shots.title': 'Uygulamadan Kareler',
    'shots.subtitle': 'LIDA\'nın temiz ve kullanıcı dostu arayüzüne göz atın.',
    'shots.home': 'Ana Ekran',
    'shots.flicker': 'Flicker Ölçümü',
    'shots.cct': 'CCT Ölçümü',
    'shots.lux': 'Lux Ölçümü',
    'shots.cri': 'CRI Ölçümü',

    'extras.label': 'Dahası da Var',
    'extras.title': 'Profesyonellerin İhtiyaçları İçin',
    'extras.history.title': 'Ölçüm Geçmişi',
    'extras.history.desc': 'Tüm ölçümlerinizi kaydedin ve sonra tekrar inceleyin.',
    'extras.calibration.title': 'Sensör Kalibrasyonu',
    'extras.calibration.desc': '3 noktalı kalibrasyon ile ölçüm doğruluğunu artırın.',
    'extras.share.title': 'Rapor Paylaşımı',
    'extras.share.desc': 'Sonuçları profesyonel rapor olarak paylaşın.',
    'extras.offline.title': 'Tamamen Offline',
    'extras.offline.desc': 'İnternet bağlantısı gerektirmez. Verileriniz cihazınızda kalır.',
    'extras.multilang.title': 'Çoklu Dil',
    'extras.multilang.desc': 'Türkçe, İngilizce, İspanyolca, Arapça, Almanca, Fransızca, Rusça, Japonca, Çince, Korece, Portekizce, Hintçe, İtalyanca.',
    'extras.feedback.title': 'Geri Bildirim',
    'extras.feedback.desc': 'Uygulama içinden anonim olarak görüş ve sorun bildirin; hesap gerektirmez.',

    'pricing.label': 'Fiyatlandırma',
    'pricing.title': 'Basit ve Şeffaf',
    'pricing.subtitle': 'Abonelik yok. Tek seferlik ödeme ile sınırsız erişim.',
    'pricing.popular': 'En Popüler',
    'pricing.free.title': 'Ücretsiz',
    'pricing.free.price': '0 TL',
    'pricing.free.note': 'Sonsuza kadar ücretsiz',
    'pricing.free.f1': 'Tüm ölçüm türleri (Flicker, CCT, Lux, CRI)',
    'pricing.free.f2': '3 ölçüm kaydı',
    'pricing.free.f3': '1 Tam Denetim denemesi',
    'pricing.free.f4': 'Filigranlı PDF raporu',
    'pricing.free.f5': 'Uygulama içi geri bildirim',
    'pricing.free.f6': 'Reklam içerir',
    'pricing.free.f7': 'Sensör kalibrasyonu',
    'pricing.free.cta': 'Hemen Başla',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': 'Tek Seferlik',
    'pricing.premium.note': 'Ömür boyu erişim &bull; Abonelik yok',
    'pricing.premium.f1': 'Sınırsız Tam Denetim raporu',
    'pricing.premium.f2': 'Filigransız profesyonel PDF',
    'pricing.premium.f3': 'Sınırsız ölçüm kaydı',
    'pricing.premium.f4': 'Reklamsız deneyim',
    'pricing.premium.f5': 'Tamamen offline çalışma',
    'pricing.premium.f6': 'Sensör kalibrasyonu',
    'pricing.premium.f7': 'Geçmiş ve rapor paylaşımı',
    'pricing.premium.cta': 'Premium\'a Yükselt',

    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
    'footer.contact': 'İletişim',
    'footer.copy': '&copy; 2026 Baykuş Studio. Tüm hakları saklıdır.',
  },

  en: {
    'meta.title': 'LIDA — Lighting Inspection & Diagnostic App',
    'meta.description': 'Turn your smartphone camera into a professional light meter with LIDA. Measure Flicker, CCT, Lux and CRI — fully offline.',

    'nav.features': 'Features',
    'nav.fullInspection': 'Full Inspection',
    'nav.howItWorks': 'How It Works',
    'nav.screenshots': 'Screenshots',
    'nav.pricing': 'Pricing',

    'hero.badge': 'Fully Offline &bull; IEEE 1789 Compliant',
    'hero.title': 'Professional Light Measurement, <span class="highlight">In Your Pocket</span>',
    'hero.desc': 'LIDA turns your smartphone camera into a professional light meter. Flicker, CCT, Lux and CRI &mdash; all in one app, no internet required.',
    'hero.imgAlt': 'LIDA Home Screen',

    'features.label': 'Features',
    'features.title': '4 Professional Measurements, One App',
    'features.subtitle': 'Everything you need to assess lighting quality, right on your phone.',
    'features.flicker.title': 'Flicker Detection',
    'features.flicker.desc': 'Detect light flicker with rolling shutter FFT analysis. Frequency, percentage and Flicker Index measurement.',
    'features.cct.title': 'CCT &mdash; Color Temperature',
    'features.cct.desc': 'Measure the color temperature of a light source in Kelvin. Warm white, neutral or daylight.',
    'features.lux.title': 'Lux &mdash; Illuminance Level',
    'features.lux.desc': 'Calculate the lighting intensity of your environment from camera EXIF data.',
    'features.lux.tag': 'EXIF Analysis',
    'features.cri.title': 'CRI &mdash; Color Rendering Index',
    'features.cri.desc': 'Evaluate how naturally a light renders colors on a 0-100 scale.',
    'features.cri.tag': '0 &ndash; 100 Score',

    'fi.badge': 'New Feature &bull; Comprehensive Inspection',
    'fi.title': 'A <span class="highlight">professional inspection report</span> in one flow.',
    'fi.desc': '<strong>Full Inspection</strong> mode turns a lighting audit into a guided 4-step flow. It completes all four Flicker, Lux, CCT and CRI measurements in a single session, automatically compares the result against EN 12464-1 and IEEE 1789-2015 standards, and generates a signed PDF report.',
    'fi.highlight1': 'Operator, location, GPS and site type are recorded in a single form',
    'fi.highlight2': 'Measurements lock at each step; no risk of re-shoots or errors',
    'fi.highlight3': 'Automatic PASS / FAIL verdict and a standards-referenced recommendation list',
    'fi.highlight4': 'Shareable, archivable professional PDF output',
    'fi.imgAlt': 'Full Inspection summary report',
    'fi.flowTitle': 'Inspection Flow in 4 Steps',
    'fi.flowSubtitle': 'From preparation to a standards-compliant report, all on one screen.',
    'fi.step0.badge': 'Setup',
    'fi.step0.title': 'Inspection Details',
    'fi.step0.desc': 'Operator, measurement location, site type, GPS coordinates and notes.',
    'fi.step0.alt': 'Inspection setup form',
    'fi.step1.badge': 'Step 1',
    'fi.step1.title': 'Flicker Measurement',
    'fi.step1.desc': 'Flicker frequency and percentage via rolling shutter FFT.',
    'fi.step1.alt': 'Flicker measurement',
    'fi.step2.badge': 'Step 2',
    'fi.step2.title': 'Illuminance Level',
    'fi.step2.desc': 'EXIF-based illuminance (lux) measurement and sensor check.',
    'fi.step2.alt': 'Lux measurement',
    'fi.step3.badge': 'Step 3',
    'fi.step3.title': 'CCT &amp; CRI',
    'fi.step3.desc': 'Color temperature (Kelvin) and color rendering index (Ra).',
    'fi.step3.alt': 'CCT and CRI measurement',
    'fi.step4.badge': 'Step 4',
    'fi.step4.title': 'Summary &amp; Report',
    'fi.step4.desc': 'Standards comparison, recommendations and PDF output.',
    'fi.step4.alt': 'Summary and recommendations',

    'how.label': 'How It Works?',
    'how.title': '3 Simple Steps',
    'how.subtitle': 'No complex devices needed. Open your camera and start measuring.',
    'how.step1.title': 'Open the Camera',
    'how.step1.desc': 'Point your camera at the light source. LIDA gets ready automatically.',
    'how.step2.title': 'Choose a Measurement',
    'how.step2.desc': 'Flicker, CCT, Lux or CRI &mdash; pick the measurement you want or run them all at once.',
    'how.step3.title': 'Get the Result',
    'how.step3.desc': 'See instant results, save them to history and share them as professional reports.',

    'shots.label': 'Preview',
    'shots.title': 'Snapshots from the App',
    'shots.subtitle': 'Take a look at LIDA\'s clean and user-friendly interface.',
    'shots.home': 'Home Screen',
    'shots.flicker': 'Flicker Measurement',
    'shots.cct': 'CCT Measurement',
    'shots.lux': 'Lux Measurement',
    'shots.cri': 'CRI Measurement',

    'extras.label': 'There\'s More',
    'extras.title': 'Built for Professionals',
    'extras.history.title': 'Measurement History',
    'extras.history.desc': 'Save all your measurements and review them again later.',
    'extras.calibration.title': 'Sensor Calibration',
    'extras.calibration.desc': 'Improve measurement accuracy with 3-point calibration.',
    'extras.share.title': 'Report Sharing',
    'extras.share.desc': 'Share results as a professional report.',
    'extras.offline.title': 'Fully Offline',
    'extras.offline.desc': 'No internet connection required. Your data stays on your device.',
    'extras.multilang.title': 'Multi-language',
    'extras.multilang.desc': 'Turkish, English, Spanish, Arabic, German, French, Russian, Japanese, Chinese, Korean, Portuguese, Hindi, Italian.',
    'extras.feedback.title': 'Feedback',
    'extras.feedback.desc': 'Send opinions and report issues anonymously from within the app; no account required.',

    'pricing.label': 'Pricing',
    'pricing.title': 'Simple and Transparent',
    'pricing.subtitle': 'No subscription. Unlimited access with a one-time payment.',
    'pricing.popular': 'Most Popular',
    'pricing.free.title': 'Free',
    'pricing.free.price': '$0',
    'pricing.free.note': 'Free forever',
    'pricing.free.f1': 'All measurement types (Flicker, CCT, Lux, CRI)',
    'pricing.free.f2': '3 saved measurements',
    'pricing.free.f3': '1 Full Inspection trial',
    'pricing.free.f4': 'Watermarked PDF report',
    'pricing.free.f5': 'In-app feedback',
    'pricing.free.f6': 'Contains ads',
    'pricing.free.f7': 'Sensor calibration',
    'pricing.free.cta': 'Get Started',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': 'One-time',
    'pricing.premium.note': 'Lifetime access &bull; No subscription',
    'pricing.premium.f1': 'Unlimited Full Inspection reports',
    'pricing.premium.f2': 'Watermark-free professional PDF',
    'pricing.premium.f3': 'Unlimited saved measurements',
    'pricing.premium.f4': 'Ad-free experience',
    'pricing.premium.f5': 'Fully offline operation',
    'pricing.premium.f6': 'Sensor calibration',
    'pricing.premium.f7': 'History and report sharing',
    'pricing.premium.cta': 'Upgrade to Premium',

    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.copy': '&copy; 2026 Baykuş Studio. All rights reserved.',
  },

  // --- Çevrilecek diller (eksik anahtarlar EN'e düşer) ---
  es: {},
  ar: {},
  de: {},
  fr: {},
  ru: {},
  ja: {},
  zh: {},
  ko: {},
  'pt-BR': {},
  hi: {},
  it: {},
};

(function () {
  'use strict';

  const STORAGE_KEY = 'lida_lang';
  const FALLBACK = 'en';
  const SUPPORTED = LANG_META.map(function (m) { return m.code; });

  // Tarayıcı dilini desteklenen bir koda eşle.
  // Önce tam eşleşme (pt-BR), sonra ana dil (pt), bulunamazsa fallback.
  function detectLang() {
    const langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

    for (let i = 0; i < langs.length; i++) {
      const raw = (langs[i] || '').trim();
      if (!raw) continue;
      // Tam eşleşme (büyük/küçük harf duyarsız): pt-BR, zh-Hant vb.
      const exact = SUPPORTED.find(function (c) {
        return c.toLowerCase() === raw.toLowerCase();
      });
      if (exact) return exact;
      // Ana dil eşleşmesi: "de-AT" -> "de"
      const base = raw.split('-')[0].toLowerCase();
      const baseMatch = SUPPORTED.find(function (c) {
        return c.split('-')[0].toLowerCase() === base;
      });
      if (baseMatch) return baseMatch;
    }
    return FALLBACK;
  }

  function resolve(lang, key) {
    const dict = TRANSLATIONS[lang];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    const fb = TRANSLATIONS[FALLBACK];
    return fb && fb[key] !== undefined ? fb[key] : null;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = FALLBACK;
    const meta = LANG_META.find(function (m) { return m.code === lang; });
    const dir = meta ? meta.dir : 'ltr';

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);

    // Görünür/iç metinler
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const val = resolve(lang, el.getAttribute('data-i18n'));
      if (val !== null) el.innerHTML = val;
    });
    // Öznitelik metinleri
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      const val = resolve(lang, el.getAttribute('data-i18n-content'));
      if (val !== null) el.setAttribute('content', val);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const val = resolve(lang, el.getAttribute('data-i18n-alt'));
      if (val !== null) el.setAttribute('alt', val);
    });

    // Seçicideki aktif dil etiketi
    const current = document.getElementById('langCurrent');
    if (current && meta) current.textContent = meta.label;

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function buildMenu() {
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    menu.innerHTML = '';
    LANG_META.forEach(function (m) {
      const btn = document.createElement('button');
      btn.className = 'lang-option';
      btn.setAttribute('data-lang', m.code);
      btn.setAttribute('role', 'menuitem');
      btn.innerHTML = '<span>' + m.name + '</span><span class="lang-native">' + m.label + '</span>';
      btn.addEventListener('click', function () {
        applyLang(m.code);
        closeMenu();
      });
      menu.appendChild(btn);
    });
  }

  function openMenu() {
    const sw = document.getElementById('langSwitcher');
    const btn = document.getElementById('langButton');
    if (sw) sw.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    const sw = document.getElementById('langSwitcher');
    const btn = document.getElementById('langButton');
    if (sw) sw.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function init() {
    buildMenu();

    const btn = document.getElementById('langButton');
    const sw = document.getElementById('langSwitcher');
    if (btn && sw) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (sw.classList.contains('open')) closeMenu();
        else openMenu();
      });
      // Dışarı tıklanınca kapat
      document.addEventListener('click', function (e) {
        if (!sw.contains(e.target)) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
    }

    // Önce kullanıcının kayıtlı tercihi, yoksa tarayıcı dili
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    const initial = (saved && SUPPORTED.indexOf(saved) !== -1) ? saved : detectLang();
    applyLang(initial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
