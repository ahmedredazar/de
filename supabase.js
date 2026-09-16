/* DEZN content loader - reads public content from Supabase.
   If Supabase is not configured, the existing local data remains as fallback.
*/
(function () {
  const cfg = window.DEZN_SUPABASE_CONFIG || {};
  const ready = (source) => {
    window.DEZN_DATA_SOURCE = source;
    window.dispatchEvent(new CustomEvent('dezn-data-ready', { detail: { source } }));
  };

  if (!cfg.url || !cfg.anonKey) {
    ready('local');
    return;
  }

  const base = String(cfg.url).replace(/\/$/, '');
  const headers = {
    apikey: cfg.anonKey,
    Authorization: 'Bearer ' + cfg.anonKey,
    Accept: 'application/json'
  };

  async function select(table, order = 'published_at.desc') {
    const url = base + '/rest/v1/' + table + '?select=*&order=' + encodeURIComponent(order);
    const res = await fetch(url, { headers, cache: 'no-store' });
    if (!res.ok) throw new Error(table + ': HTTP ' + res.status);
    return res.json();
  }

  const arr = (v) => {
    if (Array.isArray(v)) return v.filter(Boolean);
    if (typeof v === 'string') {
      try { const x = JSON.parse(v); if (Array.isArray(x)) return x.filter(Boolean); } catch (_) {}
      return v.split(/\n|,/).map(s => s.trim()).filter(Boolean);
    }
    return [];
  };
  const obj = (v) => {
    if (v && typeof v === 'object') return v;
    if (typeof v === 'string') { try { return JSON.parse(v) || {}; } catch (_) {} }
    return {};
  };
  const first = (...v) => v.find(x => x !== null && x !== undefined && x !== '');

  function mapProject(r) {
    const slug = r.slug || r.id;
    const images = arr(first(r.images, r.image_urls, r.imgs));
    return {
      title: first(r.title_ar, r.title, 'مشروع'),
      titleEn: first(r.title_en, r.title_ar, 'Project'),
      catLabel: first(r.cat_label_ar, r.category_label_ar, r.category, 'عام'),
      catLabelEn: first(r.cat_label_en, r.category_label_en, r.category, 'General'),
      category: r.category || 'public',
      meta: first(r.meta_ar, r.meta, ''),
      metaEn: first(r.meta_en, r.meta_ar, ''),
      specs: Object.entries(obj(first(r.specs, {}))),
      specsEn: Object.entries(obj(first(r.specs_en, {}))),
      body: first(r.body_ar, r.body, '<p>لم تتم إضافة تفاصيل المشروع بعد.</p>'),
      bodyEn: first(r.body_en, r.body_ar, ''),
      imgs: images,
      author: first(r.author, r.publisher, 'DEZN'),
      summary: first(r.summary_ar, r.excerpt_ar, ''),
      summaryEn: first(r.summary_en, r.excerpt_en, ''),
      publishedAt: r.published_at || r.created_at || ''
    };
  }

  function mapKnowledge(r) {
    const slug = r.slug || r.id;
    return {
      label: first(r.label_ar, r.label, 'KNOWLEDGE'),
      labelEn: first(r.label_en, r.label_ar, 'KNOWLEDGE'),
      title: first(r.title_ar, r.title, 'موضوع'),
      titleEn: first(r.title_en, r.title_ar, 'Article'),
      desc: first(r.desc_ar, r.excerpt_ar, r.description_ar, ''),
      descEn: first(r.desc_en, r.excerpt_en, r.description_en, ''),
      body: first(r.body_ar, r.content_ar, r.body, '<p>لم تتم إضافة الموضوع بعد.</p>'),
      bodyEn: first(r.body_en, r.content_en, r.body_ar, ''),
      cover: first(r.cover_url, r.image_url, ''),
      author: first(r.author, r.publisher, 'DEZN'),
      publishedAt: r.published_at || r.created_at || ''
    };
  }

  function mapBook(r) {
    return {
      titleAr: first(r.title_ar, r.title, ''), titleEn: first(r.title_en, r.title_ar, ''),
      authorAr: first(r.author_ar, r.author, ''), authorEn: first(r.author_en, r.author_ar, ''),
      year: r.year || '', descAr: first(r.desc_ar, r.description_ar, ''), descEn: first(r.desc_en, r.description_en, r.desc_ar, ''),
      downloadUrl: first(r.download_url, r.file_url, ''), coverUrl: first(r.cover_url, r.image_url, ''),
      publishedAt: r.published_at || r.created_at || ''
    };
  }

  async function load() {
    try {
      const [projects, knowledge, books] = await Promise.all([
        select('projects'), select('knowledge'), select('books')
      ]);
      const P = {}, PE = {};
      projects.forEach(r => { const p = mapProject(r), id = r.slug || r.id; P[id] = p; PE[id] = { title: p.titleEn, catLabel: p.catLabelEn, meta: p.metaEn, body: p.bodyEn }; });
      const K = {};
      knowledge.forEach(r => { const a = mapKnowledge(r), id = r.slug || r.id; K[id] = a; });
      const B = books.map(mapBook);
      window.DEZN_PROJECTS = P;
      window.DEZN_PROJECTS_EN = PE;
      window.DEZN_KNOWLEDGE = K;
      window.DEZN_BOOKS = B;
      ready('supabase');
    } catch (err) {
      console.error('[DEZN] Supabase load failed; using local fallback.', err);
      ready('local-fallback');
    }
  }

  load();
})();
