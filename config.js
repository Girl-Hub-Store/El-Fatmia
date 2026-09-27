/*
  El Fatimia frontend configuration.
  Paste your Supabase Project URL and anon/publishable key here.
  NEVER put a service_role key in this file.
*/window.EL_FATIMIA_CONFIG = {
  supabaseUrl: 'https://rhhjiepwdxzvhwmfemle.supabase.co',
  supabaseAnonKey: 'sb_publishable_fwVdgPFkaQ2maVSmZo3mgA_5theHVPQ',
  googleAnalyticsId: '',
  googleAdsId: ''
};

if (window.supabase && window.EL_FATIMIA_CONFIG.supabaseUrl && window.EL_FATIMIA_CONFIG.supabaseAnonKey) {
  window.supabaseClient = window.supabase.createClient(
    window.EL_FATIMIA_CONFIG.supabaseUrl,
    window.EL_FATIMIA_CONFIG.supabaseAnonKey
  );
}

(function setupGoogle() {
  const cfg = window.EL_FATIMIA_CONFIG;
  const ids = [cfg.googleAnalyticsId, cfg.googleAdsId].filter(Boolean);
  if (!ids.length) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ids[0]);
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){dataLayer.push(arguments)};
  gtag('js', new Date());
  ids.forEach(id => gtag('config', id));
})();
