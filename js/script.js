function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("translate-popup");
    popup.style.display = "flex";
  
    document.getElementById("translate-yes").addEventListener("click", function () {
      document.getElementById("google_translate_element").style.display = "block";
  
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
  
      popup.style.display = "none";
    });
  
    document.getElementById("translate-no").addEventListener("click", function () {
      popup.style.display = "none";
    });
  });
  