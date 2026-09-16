// DEZN PROJECTS DATA
// لإضافة مشروع جديد: انسخ أي مشروع داخل PROJECTS ثم غيّر id والبيانات والصور.
const PROJECTS = {
    villa: {
      title: 'فيلا سكنية حديثة',
      catLabel: 'سكني',
      category: 'residential',
      meta: 'Residential Architecture · 2025 · 450 م²',
      specs: [
        ['المساحة', '450 م²'],
        ['السنة', '2025'],
        ['النوع', 'فيلا مستقلة'],
        ['الموقع', 'القاهرة'],
        ['الحالة', 'تصميم']
      ],
      body: `
        <p>مشروع فيلا سكنية مستقلة بمساحة 450 متر مربع، مصممة لعائلة معاصرة مع تركيز على الإضاءة الطبيعية والمساحات المفتوحة.</p>
        <p>التصميم يعتمد على خطوط بسيطة ونظيفة، مع استخدام مواد طبيعية مثل الحجر والخرسانة المكشوفة والزجاج الكبير. الواجهة الجنوبية تحتوي على فتحات واسعة لتعظيم دخول الشمس شتاءً وتقليلها صيفاً.</p>
        <p><strong>البرنامج الوظيفي:</strong></p>
        <ul>
          <li>طابق أرضي: صالة معيشة مفتوحة + مطبخ + غرفة ضيوف + حمام</li>
          <li>طابق أول: 3 غرف نوم + حمامين + تراس</li>
          <li>سطح: منطقة جلوس خارجية مع إطلالة</li>
        </ul>
        <p>التصميم الداخلي يتبع نفس روح الواجهة: ألوان محايدة، خامات طبيعية، وأثاث بسيط. الإضاءة مختلطة بين طبيعية وصناعية مخفية.</p>
        <p>تم التنفيذ باستخدام: AutoCAD · Revit · 3ds Max</p>
      `,
      imgs: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
      ]
    },
    complex: {
      title: 'مجمع سكني فاخر',
      catLabel: 'سكني',
      category: 'residential',
      meta: 'Multi-family · 2024',
      specs: [['المساحة','12000 م²'],['السنة','2024'],['النوع','مجمع سكني'],['الوحدات','48'],['الموقع','القاهرة']],
      body: '<p>مجمع سكني منظم حول أفنية خضراء مشتركة. كل وحدة تحتفظ بخصوصيتها مع إحساس بالمجتمع في المساحات المشتركة.</p><p>الممرات والفراغات العامة مصممة لتقليل الحركة العابرة وزيادة الأمان والخصوصية.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
      ]
    },
    apartment: {
      title: 'تصميم داخلي - شقة',
      catLabel: 'داخلي',
      category: 'interior',
      meta: 'Interior Design · 2025',
      specs: [['المساحة','180 م²'],['السنة','2025'],['النوع','تصميم داخلي'],['الغرف','3+1']],
      body: '<p>تصميم داخلي هادئ لشقة سكنية: خامات طبيعية، إضاءة ناعمة، وتكوين بسيط للأثاث والمساحات.</p><p>الألوان محايدة مع لمسات خشبية ومعدنية خفيفة لخلق جو مريح للعائلة.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop'
      ]
    },
    office: {
      title: 'مبنى إداري حديث',
      catLabel: 'تجاري',
      category: 'commercial',
      meta: 'Commercial · 2024',
      specs: [['المساحة','8500 م²'],['السنة','2024'],['النوع','مكاتب'],['الأدوار','12']],
      body: '<p>مبنى إداري بواجهة زجاجية وأدوار مرنة تناسب فرق العمل المتغيرة. التركيز على الإضاءة الطبيعية والتهوية والوضوح في الحركة الرأسية والأفقية.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop'
      ]
    },
    museum: {
      title: 'مركز ثقافي ومتحف',
      catLabel: 'عام / ثقافي',
      category: 'public',
      meta: 'Cultural · 2023',
      specs: [['المساحة','6000 م²'],['السنة','2023'],['النوع','ثقافي'],['الموقع','القاهرة']],
      body: '<p>مركز ثقافي ومتحف بكتلة نحتية ومدخل مفتوح يستقبل الجمهور. المسار الداخلي يربط قاعات العرض بفراغات الاستراحة والإطلالات الخارجية.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
      ]
    },
    resort: {
      title: 'منتجع سياحي',
      catLabel: 'منتجعات',
      category: 'landscape',
      meta: 'Hospitality · 2024',
      specs: [['المساحة','25000 م²'],['السنة','2024'],['النوع','منتجع'],['الوحدات','80']],
      body: '<p>منتجع سياحي بمساحات مفتوحة وإطلالات وخدمات متكاملة. التخطيط يفصل بين حركة الزوار والخدمات مع الحفاظ على الهوية البصرية للمكان.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
      ]
    },
    beach: {
      title: 'بيت صيفي على البحر',
      catLabel: 'سكني',
      category: 'residential',
      meta: 'Coastal Residential · 2024',
      specs: [['المساحة','320 م²'],['السنة','2024'],['النوع','بيت صيفي'],['الموقع','ساحل']],
      body: '<p>بيت صيفي مفتوح على البحر مع تراسات مظللة وخامات مناسبة للمناخ الساحلي. المخطط يتابع خط الأفق ويقلل من التعرض المباشر للشمس في أوقات الذروة.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8624?w=800&h=600&fit=crop'
      ]
    },
    mall: {
      title: 'مركز تسوق حديث',
      catLabel: 'تجاري',
      category: 'commercial',
      meta: 'Retail · 2024',
      specs: [['المساحة','18000 م²'],['السنة','2024'],['النوع','تجزئة'],['المحاور','3']],
      body: '<p>مركز تسوق بواجهة حضرية واضحة ومسارات حركة سلسة بين المحلات والفراغات العامة. التصميم يوازن بين الجاذبية التجارية وسهولة التشغيل.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
      ]
    },
    workspace: {
      title: 'تصميم مكتب حديث',
      catLabel: 'داخلي',
      category: 'interior',
      meta: 'Workspace · 2025',
      specs: [['المساحة','450 م²'],['السنة','2025'],['النوع','مكتب'],['محطات','40']],
      body: '<p>مساحة عمل مرنة بإضاءة طبيعية وتخطيط مفتوح مع مناطق اجتماعات هادئة. الخامات والألوان تدعم التركيز والراحة لفترات العمل الطويلة.</p>',
      imgs: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&h=900&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
      ]
    }
  };

const PROJECTS_EN = {
    villa: {
      title: 'Modern Residential Villa',
      catLabel: 'Residential',
      meta: 'Residential Architecture · 2025 · 450 m²',
      specs: [['Area','450 m²'],['Year','2025'],['Type','Detached villa'],['Location','Cairo'],['Status','Design']],
      body: `<p>A 450 m² detached residential villa designed for a contemporary family, with a focus on natural light and open spaces.</p><p>Clean lines, natural materials such as stone, exposed concrete, and large glass. The south facade maximizes winter sun and limits summer heat.</p><p><strong>Program:</strong></p><ul><li>Ground: open living + kitchen + guest room + bath</li><li>First: 3 bedrooms + 2 baths + terrace</li><li>Roof: outdoor seating with views</li></ul><p>Tools: AutoCAD · Revit · 3ds Max</p>`
    },
    complex: {
      title: 'Luxury Residential Complex',
      catLabel: 'Residential',
      meta: 'Multi-family · 2024',
      specs: [['Area','12,000 m²'],['Year','2024'],['Type','Residential complex'],['Units','48'],['Location','Cairo']],
      body: `<p>A residential complex organized around shared green courtyards. Each unit keeps privacy while common spaces build community.</p>`
    },
    apartment: {
      title: 'Interior Design — Apartment',
      catLabel: 'Interior',
      meta: 'Interior Design · 2025',
      specs: [['Area','180 m²'],['Year','2025'],['Type','Interior'],['Rooms','3+1']],
      body: `<p>A calm interior for a family apartment: natural materials, soft lighting, and simple furniture layout.</p>`
    },
    office: {
      title: 'Modern Office Building',
      catLabel: 'Commercial',
      meta: 'Commercial · 2024',
      specs: [['Area','8,500 m²'],['Year','2024'],['Type','Offices'],['Floors','12']],
      body: `<p>An office building with a glass facade and flexible floors for changing teams, focusing on daylight, ventilation, and clear circulation.</p>`
    },
    museum: {
      title: 'Cultural Center & Museum',
      catLabel: 'Public / Cultural',
      meta: 'Cultural · 2023',
      specs: [['Area','6,000 m²'],['Year','2023'],['Type','Cultural'],['Location','Cairo']],
      body: `<p>A cultural center and museum with a sculptural mass and open entrance. The interior path links galleries to rest areas and outdoor views.</p>`
    },
    resort: {
      title: 'Tourist Resort',
      catLabel: 'Resorts',
      meta: 'Hospitality · 2024',
      specs: [['Area','25,000 m²'],['Year','2024'],['Type','Resort'],['Units','80']],
      body: `<p>A tourist resort with open spaces, views, and full services. Planning separates guest flow from services while keeping a clear visual identity.</p>`
    },
    beach: {
      title: 'Seaside Summer House',
      catLabel: 'Residential',
      meta: 'Coastal Residential · 2024',
      specs: [['Area','320 m²'],['Year','2024'],['Type','Summer house'],['Location','Coast']],
      body: `<p>A summer house open to the sea with shaded terraces and coastal-appropriate materials.</p>`
    },
    mall: {
      title: 'Modern Shopping Center',
      catLabel: 'Commercial',
      meta: 'Retail · 2024',
      specs: [['Area','18,000 m²'],['Year','2024'],['Type','Retail'],['Axes','3']],
      body: `<p>A shopping center with a clear urban facade and smooth paths between shops and public spaces.</p>`
    },
    workspace: {
      title: 'Modern Office Interior',
      catLabel: 'Interior',
      meta: 'Workspace · 2025',
      specs: [['Area','450 m²'],['Year','2025'],['Type','Office'],['Stations','40']],
      body: `<p>A flexible workspace with natural light, open planning, and quiet meeting zones.</p>`
    }
  };

window.DEZN_PROJECTS = PROJECTS;
window.DEZN_PROJECTS_EN = PROJECTS_EN;
