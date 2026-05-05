// e3gallery — catalog and shared helpers
// Production build: Etsy URLs are real listing URLs from e3galleryprints shop.
// Images: local img/ folder (1800px web-optimised JPEGs from HQ masters).

const CATALOG = [
  // ICELAND
  { slug: 'stokksnes',
    title: 'Stokksnes',
    country: 'Iceland',
    region: 'Vestrahorn · Black Sand · Iceland',
    etsyUrl: 'https://www.etsy.com/listing/4499141225',
    img: 'img/stokksnes.jpg',
    aspect: '3/2',
    blurb: 'A volcanic mountain rises over black volcanic sand. Twenty minutes of stillness before the tide returned. Stokksnes is a place that feels older than the sea around it.',
    blurb_es: 'Una montaña volcánica sobre arena negra. Veinte minutos de quietud antes de que volviera la marea. Stokksnes es un lugar que parece más antiguo que el mar que lo rodea.' },

  { slug: 'bruarfoss',
    title: 'Bruarfoss',
    country: 'Iceland',
    region: 'Bruará River · Iceland',
    etsyUrl: 'https://www.etsy.com/listing/4499170303',
    img: 'img/bruarfoss.jpg',
    aspect: '2/3',
    blurb: 'Glacial water finds a hundred channels through black basalt. Photographed at first light, when the blue runs deepest.',
    blurb_es: 'El agua glaciar encuentra cien canales a través del basalto negro. Fotografiada al primer amanecer, cuando el azul es más profundo.' },

  { slug: 'diamond-beach',
    title: 'Diamond Beach',
    country: 'Iceland',
    region: 'Jökulsárlón · Iceland',
    etsyUrl: 'https://www.etsy.com/listing/4499073188',
    img: 'img/diamond-beach.jpg',
    aspect: '3/2',
    blurb: 'Icebergs the size of cars, ground smooth by the Atlantic, returned to the shore as polished glass.',
    blurb_es: 'Icebergs del tamaño de coches, pulidos por el Atlántico, devueltos a la orilla como vidrio bruñido.' },

  { slug: 'kirkjufell',
    title: 'Kirkjufell',
    country: 'Iceland',
    region: 'Snæfellsnes · Iceland',
    etsyUrl: 'https://www.etsy.com/listing/4499108095',
    img: 'img/kirkjufell.jpg',
    aspect: '3/2',
    blurb: 'The most photographed mountain in Iceland — and still, alone with it before sunrise, it earns the attention.',
    blurb_es: 'La montaña más fotografiada de Islandia — y aun así, solo con ella antes del amanecer, se gana la atención.' },

  { slug: 'queen-of-foss',
    title: 'Queen of Foss',
    country: 'Iceland',
    region: 'Skógafoss · Iceland',
    etsyUrl: 'https://www.etsy.com/listing/4499117425',
    img: 'img/queen-of-foss.jpg',
    aspect: '3/2',
    blurb: 'Skógafoss, the queen of Icelandic falls. And another queen standing before it, meeting it for the first time. Two reigns in one frame.',
    blurb_es: 'Skógafoss, la reina de las cascadas islandesas. Y otra reina ante ella, conociéndola por primera vez. Dos reinados en un mismo encuadre.' },

  // Reynasfara (eid 4495720589) eliminada el 2026-05-04: descatalogada de Etsy.

  // SCOTLAND
  { slug: 'old-man-of-storr',
    title: 'Old Man of Storr',
    country: 'Scotland',
    region: 'Isle of Skye · Scotland',
    etsyUrl: 'https://www.etsy.com/listing/4499147075',
    img: 'img/old-man-of-storr.jpg',
    aspect: '3/2',
    blurb: 'Skye in October. The pinnacle held the light for four minutes, then the cloud closed and the day was over.',
    blurb_es: 'Skye en octubre. El pináculo sostuvo la luz cuatro minutos, luego la nube se cerró y el día terminó.' },

  { slug: 'glenfinnan-viaduct',
    title: 'Glenfinnan Viaduct',
    country: 'Scotland',
    region: 'Lochaber · Scotland',
    etsyUrl: 'https://www.etsy.com/listing/4499108476',
    img: 'img/glenfinnan-viaduct.jpg',
    aspect: '3/2',
    blurb: 'Twenty-one stone arches arcing across a Highland valley. A line drawn by hand in 1898, still in use.',
    blurb_es: 'Veintiún arcos de piedra sobre un valle de las Highlands. Una línea trazada a mano en 1898, todavía en uso.' },

  { slug: 'sligachan-bridge',
    title: 'Sligachan Bridge',
    country: 'Scotland',
    region: 'Glen Sligachan · Scotland',
    etsyUrl: 'https://www.etsy.com/listing/4499135005',
    img: 'img/sligachan-bridge.jpg',
    aspect: '2/3',
    blurb: 'An old packhorse bridge under the Cuillin. The river here runs cold enough to make your hands ache in summer.',
    blurb_es: 'Un viejo puente de carga bajo las Cuillin. El río corre tan frío que te duelen las manos en verano.' },

  // FRANCE
  { slug: 'valensole',
    title: 'Valensole',
    country: 'France',
    region: 'Plateau de Valensole · Provence',
    etsyUrl: 'https://www.etsy.com/listing/4499165752',
    img: 'img/valensole.jpg',
    aspect: '3/2',
    blurb: 'Lavender in late June, three weeks before the harvest. The air is heavy enough that you can taste it.',
    blurb_es: 'Lavanda a finales de junio, tres semanas antes de la cosecha. El aire es tan denso que puedes saborearlo.' },

  { slug: 'sea-of-clouds',
    title: 'Sea of Clouds',
    country: 'France',
    region: 'Pyrénées · France',
    etsyUrl: 'https://www.etsy.com/listing/4499182376',
    img: 'img/sea-of-clouds.jpg',
    aspect: '3/2',
    blurb: 'A temperature inversion in the Pyrenees. The valley filled like a bathtub and the peaks became islands.',
    blurb_es: 'Una inversión térmica en los Pirineos. El valle se llenó como una bañera y los picos se convirtieron en islas.' },

  // ITALY
  { slug: 'colosseum-rome',
    title: 'Colosseum Rome',
    country: 'Italy',
    region: 'Rome · Italy',
    etsyUrl: 'https://www.etsy.com/listing/4499164989',
    img: 'img/colosseum-rome.jpg',
    aspect: '3/2',
    blurb: 'Rome at five in the morning, the only hour the city belongs to itself. Two thousand years of patience.',
    blurb_es: 'Roma a las cinco de la mañana, la única hora en que la ciudad se pertenece a sí misma. Dos mil años de paciencia.' },

  { slug: 'pantheon-rome',
    title: 'Pantheon Rome',
    country: 'Italy',
    region: 'Rome · Italy',
    etsyUrl: 'https://www.etsy.com/listing/4499171939',
    img: 'img/pantheon-rome.jpg',
    aspect: '3/2',
    blurb: 'The oldest intact building in Rome. Every architect since the Renaissance has measured themselves against this dome.',
    blurb_es: 'El edificio intacto más antiguo de Roma. Desde el Renacimiento, cada arquitecto se ha medido frente a esta cúpula.' },

  // SPAIN
  { slug: 'barcelona-beach',
    title: 'Barcelona Beach',
    country: 'Spain',
    region: 'Barceloneta · Catalunya',
    etsyUrl: 'https://www.etsy.com/listing/4499038147',
    img: 'img/barcelona-beach.jpg',
    aspect: '3/2',
    blurb: 'Long exposure on a still December morning. The Mediterranean held its breath.',
    blurb_es: 'Larga exposición en una tranquila mañana de diciembre. El Mediterráneo aguantó la respiración.' },

  { slug: 'naranjo-de-bulnes',
    title: 'Naranjo de Bulnes',
    country: 'Spain',
    region: 'Picos de Europa · Asturias',
    etsyUrl: 'https://www.etsy.com/listing/4499162710',
    img: 'img/naranjo-de-bulnes.jpg',
    aspect: '2/3',
    blurb: 'A vertical mile of limestone above the green. The mountain has its own weather.',
    blurb_es: 'Un kilómetro vertical de caliza sobre el verde. La montaña tiene su propio clima.' },

  { slug: 'green-lady',
    title: 'Green Lady',
    country: 'Iceland',
    region: 'Iceland · Aurora Borealis',
    etsyUrl: 'https://www.etsy.com/listing/4499167579',
    img: 'img/green-lady.jpg',
    aspect: '2/3',
    blurb: 'Emerald curtains of aurora borealis swirl across the Icelandic winter sky. A mythical display that has inspired legends for centuries.',
    blurb_es: 'Cortinas de aurora boreal esmeralda giran sobre el cielo invernal de Islandia. Un espectáculo que ha inspirado leyendas durante siglos.' },

  { slug: 'castildetierra',
    title: 'Castildetierra',
    country: 'Spain',
    region: 'Bardenas Reales · Navarra',
    etsyUrl: 'https://www.etsy.com/listing/4499077955',
    img: 'img/castildetierra.jpg',
    aspect: '3/2',
    blurb: 'A clay sentinel left behind by ten thousand years of erosion. Slowly going.',
    blurb_es: 'Un centinela de arcilla dejado atrás por diez mil años de erosión. Desapareciendo lentamente.' },

  { slug: 'petroli-waves',
    title: 'Petroli Waves',
    country: 'Spain',
    region: 'Costa Brava · Catalunya',
    etsyUrl: 'https://www.etsy.com/listing/4499121460',
    img: 'img/petroli-waves.jpg',
    aspect: '3/2',
    blurb: 'A storm rolled in from the Balearic and the sea turned to mercury for half an hour.',
    blurb_es: 'Una tormenta llegó desde las Baleares y el mar se volvió mercurio durante media hora.' },

  { slug: 'toledo-night',
    title: 'Toledo Night',
    country: 'Spain',
    region: 'Toledo · Castilla–La Mancha',
    etsyUrl: 'https://www.etsy.com/listing/4499159712',
    img: 'img/toledo-night.jpg',
    aspect: '2/3',
    blurb: 'The old city held against the dark. Lights on towers older than most countries.',
    blurb_es: 'La ciudad vieja resistió contra la oscuridad. Luces sobre torres más antiguas que la mayoría de los países.' },

  { slug: 'red-forest',
    title: 'Red Forest',
    country: 'Spain',
    region: 'Pinares de Soria · Castilla y León',
    etsyUrl: 'https://www.etsy.com/listing/4499114613',
    img: 'img/red-forest.jpg',
    aspect: '3/2',
    blurb: 'A pine forest in November. The understory burned copper for two weeks, then it was gone.',
    blurb_es: 'Un bosque de pinos en noviembre. El sotobosque ardió en cobre durante dos semanas, luego desapareció.' },

  { slug: 'day-is-coming',
    title: 'Day is Coming',
    country: 'Iceland',
    region: 'Iceland · Dawn Landscape',
    etsyUrl: 'https://www.etsy.com/listing/4499100558',
    img: 'img/day-is-coming.jpg',
    aspect: '3/2',
    blurb: 'The first light of dawn breaks over Iceland\'s vast primordial landscape. A moment of pure stillness before the world awakens.',
    blurb_es: 'La primera luz del amanecer irrumpe sobre el vasto paisaje primigenio de Islandia. Un momento de pura quietud antes de que despierte el mundo.' },

  { slug: 'sitges',
    title: 'Sitges',
    country: 'Spain',
    region: 'Sitges · Catalunya',
    etsyUrl: 'https://www.etsy.com/listing/4499120577',
    img: 'img/sitges.jpg',
    aspect: '3/2',
    blurb: 'White town, blue water, a church on a headland. Some places are unfair to all the others.',
    blurb_es: 'Pueblo blanco, agua azul, una iglesia en un promontorio. Algunos lugares son injustos con todos los demás.' },

  { slug: 'calatrava-stars',
    title: 'Calatrava Stars',
    country: 'Spain',
    region: 'Valencia · Spain',
    etsyUrl: 'https://www.etsy.com/listing/4499071009',
    img: 'img/calatrava-stars.jpg',
    aspect: '3/2',
    blurb: 'The City of Arts under a moonless sky. Architecture that wants to be looked up at.',
    blurb_es: 'La Ciudad de las Artes bajo un cielo sin luna. Arquitectura que quiere ser mirada desde abajo.' },
];

const COLLECTIONS = [
  { slug: 'iceland',  name: 'Iceland',  cover: 'img/stokksnes.jpg' },
  { slug: 'france',   name: 'France',   cover: 'img/valensole.jpg' },
  { slug: 'scotland', name: 'Scotland', cover: 'img/old-man-of-storr.jpg' },
  { slug: 'spain',    name: 'Spain',    cover: 'img/castildetierra.jpg' },
  { slug: 'italy',    name: 'Italy',    cover: 'img/colosseum-rome.jpg' },
];

// Print templates — synced with KPI/e3data.json (root.etsyTemplates).
// Sizes & prices are the source of truth for what is offered on Etsy.
const TEMPLATES = {
  A: { paper: 'Premium Luster', variants: [
        { name: '12×18″', price: 35 },
        { name: '20×30″', price: 65 },
        { name: '24×36″', price: 110 },
      ] },
  B: { paper: 'Premium Luster', variants: [
        { name: '12×16″', price: 35 },
        { name: '18×24″', price: 65 },
      ] },
  C: { paper: 'Enhanced Matte', variants: [
        { name: '5×7″',   price: 15 },
        { name: 'A2',     price: 40 },
        { name: 'A1',     price: 65 },
      ] },
  D: { paper: 'Premium Luster', variants: [
        { name: '12×16″', price: 35 },
        { name: '18×24″', price: 65 },
      ] },
  F: { paper: 'Premium Luster', variants: [
        { name: '10×10″', price: 20 },
        { name: '12×12″', price: 25 },
        { name: '14×14″', price: 30 },
        { name: '16×16″', price: 35 },
        { name: '18×18″', price: 40 },
      ] },
};

// Slug → template letter. 22 published photos.
const SLUG_TEMPLATES = {
  'stokksnes': 'A', 'bruarfoss': 'C', 'diamond-beach': 'A', 'kirkjufell': 'A',
  'queen-of-foss': 'A', 'old-man-of-storr': 'A', 'glenfinnan-viaduct': 'A',
  'sligachan-bridge': 'A', 'valensole': 'A', 'sea-of-clouds': 'D',
  'colosseum-rome': 'B', 'pantheon-rome': 'F', 'barcelona-beach': 'A',
  'naranjo-de-bulnes': 'A', 'green-lady': 'B', 'castildetierra': 'A',
  'petroli-waves': 'A', 'toledo-night': 'A', 'red-forest': 'A',
  'day-is-coming': 'A', 'sitges': 'A', 'calatrava-stars': 'A',
};

function templateFor(slug) {
  return TEMPLATES[SLUG_TEMPLATES[slug]] || TEMPLATES.A;
}

function priceFrom(slug) {
  return Math.min(...templateFor(slug).variants.map(v => v.price));
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function countByCountry(country) {
  return CATALOG.filter(p => p.country === country).length;
}

function wordmark(size = 'sm') {
  return `<a href="index.html" class="wordmark size-${size}" aria-label="e3gallery — home">
    <span class="wm-e">e</span><span class="wm-3">3</span><span class="wm-gallery">gallery</span>
  </a>`;
}

// ── i18n ──────────────────────────────────────────────────────────────────
const LANG = {
  en: {
    // nav
    nav_collection: 'Collection', nav_about: 'About', nav_contact: 'Contact',
    // index
    index_eyebrow: 'Fine Art Photography',
    index_tagline: 'Landscapes. Light. Limited editions.',
    index_explore: 'Explore the Collection',
    index_featured: 'Selected Works',
    index_featured_h2: 'Twenty-two landscapes,<br/>five destinations.',
    index_view_all: 'View all prints →',
    index_dest: 'Destinations',
    index_dest_h2: 'Five collections.',
    index_quote: '<span class="accent">"</span>Every print is a window<br/>to a landscape that<br/><em>stayed with me.</em><span class="accent">"</span>',
    index_studio_eyebrow: 'The Studio',
    index_studio_p1: '<strong>Fine art photography prints.</strong> Archival pigment on premium paper, photographed in Barcelona, shipped worldwide.',
    index_studio_p2: '<strong>Open editions.</strong> Printed on demand, available in multiple sizes. Each landscape, made well.',
    index_studio_p3: '<strong>Worldwide shipping.</strong> Rolled in archival tubes. Tracked, insured, typically dispatched within a few business days.',
    index_studio_link: 'More about the studio →',
    // collection
    col_eyebrow: 'The Collection',
    col_h1: 'All prints,<br/><em id="collCount">22 landscapes.</em>',
    col_meta: 'Fine art photography from Iceland, France, Scotland, Spain and Italy. Each print archival-quality on premium paper. From 15€.',
    col_filter: 'Filter', col_all: 'All',
    // print
    print_choose_size: 'Choose a size',
    print_meta: 'Archival pigment print · Premium paper',
    print_paper: 'Paper:', print_process: 'Process:', print_shipping: 'Shipping:',
    print_shipping_val: 'Rolled in archival tube · Worldwide',
    print_order_etsy: 'Order on Etsy →', print_all_prints: 'All Prints',
    print_about_landscape: 'About this landscape',
    print_ships: 'Ships worldwide', print_secure: 'Secure checkout via Etsy',
    // about
    about_eyebrow: 'About the Studio',
    about_tagline: 'A small studio in Barcelona. Twenty-two landscapes carried home from the road.',
    about_ph_label: 'The Photographer',
    about_ph_caption: 'Reynisfjara · Iceland',
    about_ph_h2: 'A traveller with<br/>a trained eye, betting<br/>on calm and on light.',
    about_ph_p1: 'I make photographs of places that hold still long enough to be looked at. Iceland in the off season, Provence in the gap weeks, the Picos at first light — landscapes I returned to until they let me in.',
    about_ph_p2: 'The work is patient and quiet. <strong>No filters, no compositing, nothing invented.</strong> A long walk, the right hour, a tripod set on cold ground. What comes back from those mornings is what you see here.',
    about_ph_p3: 'The studio is in Barcelona. The road is everywhere else.',
    about_prints_label: 'The Prints',
    about_prints_h2: 'Made small,<br/>made well, made <em>to last.</em>',
    about_prints_p1: 'Each print is an <strong>archival pigment print</strong> on premium photo paper — Premium Luster for landscapes, Enhanced Matte for select verticals. Pigment ink, archival quality, made to last decades on a wall.',
    about_prints_p2: 'Sizes range from intimate 5×7″ studies to gallery-scale 24×36″ statements — each photograph offered in the format that suits it best.',
    about_prints_p3: 'Printed on demand and shipped worldwide via our fulfilment partner. Tracked, insured, typically dispatched within a few business days.',
    about_stat_landscapes: 'Landscapes', about_stat_dest: 'Destinations', about_stat_ships: 'Ships Worldwide',
    about_contact_label: 'Contact',
    about_contact_h2: 'Custom sizes, gallery shows,<br/>or just to say hello.',
    about_contact_p: 'The shop covers most cases. For larger formats, framed pieces, gallery loans or licensing — write directly. I read every email.',
    about_contact_h3: 'Get in touch.',
    about_contact_reply: 'Replies within forty-eight hours, unless I\'m somewhere without signal.',
    about_ci_email: 'Email', about_ci_studio: 'Studio', about_ci_shop: 'Shop', about_ci_follow: 'Follow',
  },
  es: {
    // nav
    nav_collection: 'Colección', nav_about: 'Estudio', nav_contact: 'Contacto',
    // index
    index_eyebrow: 'Fotografía Fine Art',
    index_tagline: 'Paisajes. Luz. Ediciones limitadas.',
    index_explore: 'Explorar la Colección',
    index_featured: 'Obras Seleccionadas',
    index_featured_h2: 'Veintidós paisajes,<br/>cinco destinos.',
    index_view_all: 'Ver todos los prints →',
    index_dest: 'Destinos',
    index_dest_h2: 'Cinco colecciones.',
    index_quote: '<span class="accent">"</span>Cada print es una ventana<br/>a un paisaje que<br/><em>se quedó conmigo.</em><span class="accent">"</span>',
    index_studio_eyebrow: 'El Estudio',
    index_studio_p1: '<strong>Prints de fotografía fine art.</strong> Pigmento archival sobre papel premium, fotografiados en Barcelona, envío mundial.',
    index_studio_p2: '<strong>Ediciones abiertas.</strong> Impresos bajo demanda, disponibles en varios tamaños. Cada paisaje, bien hecho.',
    index_studio_p3: '<strong>Envío mundial.</strong> En tubo archival. Con seguimiento y seguro, normalmente enviados en pocos días hábiles.',
    index_studio_link: 'Más sobre el estudio →',
    // collection
    col_eyebrow: 'La Colección',
    col_h1: 'Todos los prints,<br/><em id="collCount">22 paisajes.</em>',
    col_meta: 'Fotografía fine art de Islandia, Francia, Escocia, España e Italia. Cada print en papel de calidad archival. Desde 15€.',
    col_filter: 'Filtrar', col_all: 'Todos',
    // print
    print_choose_size: 'Elige un tamaño',
    print_meta: 'Impresión pigmento archival · Papel premium',
    print_paper: 'Papel:', print_process: 'Proceso:', print_shipping: 'Envío:',
    print_shipping_val: 'En tubo archival · Todo el mundo',
    print_order_etsy: 'Pedir en Etsy →', print_all_prints: 'Todos los Prints',
    print_about_landscape: 'Sobre este paisaje',
    print_ships: 'Envío mundial', print_secure: 'Compra segura vía Etsy',
    // about
    about_eyebrow: 'El Estudio',
    about_tagline: 'Un pequeño estudio en Barcelona. Veintidós paisajes traídos del camino.',
    about_ph_label: 'El Fotógrafo',
    about_ph_caption: 'Reynisfjara · Islandia',
    about_ph_h2: 'Un viajero con<br/>ojo entrenado, apostando<br/>por la calma y la luz.',
    about_ph_p1: 'Fotografío lugares que se quedan quietos el tiempo suficiente para ser mirados. Islandia en temporada baja, Provenza en las semanas de hueco, los Picos al amanecer — paisajes a los que volví hasta que me dejaron entrar.',
    about_ph_p2: 'El trabajo es paciente y silencioso. <strong>Sin filtros, sin composición digital, sin nada inventado.</strong> Una larga caminata, la hora correcta, un trípode sobre tierra fría. Lo que vuelve de esas mañanas es lo que ves aquí.',
    about_ph_p3: 'El estudio está en Barcelona. El camino, en todo lo demás.',
    about_prints_label: 'Los Prints',
    about_prints_h2: 'Pequeños,<br/>bien hechos, hechos <em>para durar.</em>',
    about_prints_p1: 'Cada print es una <strong>impresión de pigmento archival</strong> sobre papel fotográfico premium — Premium Luster para paisajes, Enhanced Matte para verticales seleccionados. Tinta de pigmento, calidad archival, hecho para durar décadas en una pared.',
    about_prints_p2: 'Los tamaños van desde íntimos estudios de 5×7″ hasta declaraciones de galería de 24×36″ — cada fotografía en el formato que mejor le sienta.',
    about_prints_p3: 'Impreso bajo demanda y enviado a todo el mundo. Con seguimiento y seguro, normalmente enviado en pocos días hábiles.',
    about_stat_landscapes: 'Paisajes', about_stat_dest: 'Destinos', about_stat_ships: 'Envío Mundial',
    about_contact_label: 'Contacto',
    about_contact_h2: 'Tamaños personalizados, exposiciones,<br/>o simplemente saludar.',
    about_contact_p: 'La tienda cubre la mayoría de los casos. Para formatos grandes, piezas enmarcadas, préstamos o licencias — escribe directamente. Leo todos los correos.',
    about_contact_h3: 'Escríbeme.',
    about_contact_reply: 'Respondo en cuarenta y ocho horas, salvo que esté en algún lugar sin cobertura.',
    about_ci_email: 'Email', about_ci_studio: 'Estudio', about_ci_shop: 'Tienda', about_ci_follow: 'Seguir',
  }
};

function getLang() {
  try { return localStorage.getItem('e3lang') || 'en'; } catch(e) { return 'en'; }
}

function applyLang(lang) {
  if (!lang) lang = getLang();
  const dict = LANG[lang] || LANG.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}

function setLang(lang) {
  try { localStorage.setItem('e3lang', lang); } catch(e) {}
  applyLang(lang);
}

function navHTML(active) {
  const lang = getLang();
  const d = LANG[lang] || LANG.en;
  // 'always' on every link so they're visible on all pages/viewports
  const link = (key, label, href) =>
    `<a href="${href}" class="always${active === key ? ' active' : ''}" data-i18n="nav_${key}">${label}</a>`;
  return `
    <nav class="nav" id="siteNav" role="navigation" aria-label="Main navigation">
      ${wordmark('sm')}
      <div class="nav-links">
        ${link('collection', d.nav_collection, 'collection.html')}
        ${link('about', d.nav_about, 'about.html')}
        ${link('contact', d.nav_contact, 'about.html#contact')}
        <a href="https://www.etsy.com/shop/e3galleryprints" target="_blank" rel="noopener" class="always" style="color:var(--champagne); opacity:1;">Shop ↗</a>
        <span class="lang-toggle">
          <button class="lang-btn${lang==='en'?' active':''}" data-lang="en" onclick="setLang('en')">EN</button
          ><span class="lang-sep">/</span
          ><button class="lang-btn${lang==='es'?' active':''}" data-lang="es" onclick="setLang('es')">ES</button>
        </span>
      </div>
    </nav>
  `;
}

function footerHTML() {
  return `
    <footer class="footer">
      <div class="grain subtle" aria-hidden="true"></div>
      <div class="footer-rule"></div>
      <div class="container footer-grid">
        <div>
          ${wordmark('sm')}
          <p class="footer-tagline">Landscapes. Light.<br/>Limited editions.</p>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="collection.html">Collection</a>
          <a href="about.html">About</a>
          <a href="about.html#contact">Contact</a>
          <a href="https://www.etsy.com/shop/e3galleryprints" target="_blank" rel="noopener">Etsy Shop ↗</a>
          <a href="https://www.instagram.com/e3gallery" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.pinterest.com/e3gallery" target="_blank" rel="noopener">Pinterest</a>
        </nav>
        <div class="footer-meta">
          Fine Art Photography<br/>
          Printed &amp; shipped from Barcelona<br/>
          <span style="color:var(--bone-faint)">Worldwide shipping · via Etsy</span>
        </div>
      </div>
      <div class="container footer-bottom">
        <span class="mono">© 2026 e3gallery</span>
        <span class="mono">Archival pigment prints · Premium photo paper</span>
      </div>
    </footer>
  `;
}

function mountChrome(active) {
  const navSlot = document.getElementById('nav-slot');
  const footSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.innerHTML = navHTML(active);
  if (footSlot) footSlot.innerHTML = footerHTML();

  const nav = document.getElementById('siteNav');
  if (nav) {
    const update = () => {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // apply saved language to all data-i18n elements
  applyLang(getLang());
}

function initReveals() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
}

function photoCard(p, opts = {}) {
  const { ratio, link = true } = opts;
  const aspect = ratio || p.aspect || '3/2';
  const from = priceFrom(p.slug);
  const inner = `
    <div class="photo" data-country="${p.country}" data-slug="${p.slug}" style="aspect-ratio: ${aspect};">
      <img src="${p.img}" alt="${p.title} — ${p.region}" loading="lazy" width="900" height="600" />
      <div class="photo-tint" aria-hidden="true"></div>
      <div class="photo-overlay">
        <div class="photo-meta">
          <span class="photo-loc">${p.country}</span>
          <span class="photo-title">${p.title}</span>
          <span class="mono" style="color:var(--bone-dim);">From ${from}€ · View Print →</span>
        </div>
      </div>
      <span class="photo-price" aria-hidden="true">From ${from}€</span>
    </div>
  `;
  if (!link) return inner;
  return `<a href="print.html?slug=${p.slug}" aria-label="View print: ${p.title}, from ${from}€">${inner}</a>`;
}

function findPrint(slug) {
  return CATALOG.find(p => p.slug === slug) || CATALOG[0];
}

const eur = n => `${n}€`;
