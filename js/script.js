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

  document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector(".track-section");
    let video = section.querySelector(".background-video");

    window.addEventListener("scroll", function () {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            let newSize = Math.min(100, 40 + (scrollY - sectionTop) / 10);
            video.style.width = newSize + "vw";
            video.style.height = newSize + "vw";
        }
    });
});

  