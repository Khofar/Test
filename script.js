// Initialize Google Translate silently
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false
  }, 'google_translate_element');
}

// Language dropdown behavior
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('languageSelect');

  select.addEventListener('change', function () {
    const lang = this.value;
    const currentUrl = window.location.origin + window.location.pathname;
    const newUrl = currentUrl + '#googtrans(en|' + lang + ')';
    window.location.href = newUrl;

    setTimeout(() => {
      window.location.reload();
    }, 100);
  });

  // Load Google Translate script
  const script = document.createElement('script');
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
});
