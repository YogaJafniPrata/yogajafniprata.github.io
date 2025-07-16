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

document.addEventListener("DOMContentLoaded", function () {
  let iconDefault = "./images/Sound - Icon Statis.png";
  let iconActive = "./images/Sound - Icon.gif";

  function setupAudioToggle(audioId, buttonId, iconId) {
    const audio = document.getElementById(audioId);
    const button = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);
    let isPlaying = false;

    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (isPlaying) {
        audio.pause();
        icon.src = iconDefault;
      } else {
        audio.play();
        icon.src = iconActive;
      }

      isPlaying = !isPlaying;
    });

    audio.addEventListener("ended", function () {
      icon.src = iconDefault;
      isPlaying = false;
    });
  }

  setupAudioToggle("localMusic", "soundButton", "soundIcon");
  setupAudioToggle("localMusic2", "soundButton2", "soundIcon2");
  setupAudioToggle("localMusic3", "soundButton3", "soundIcon3");
  setupAudioToggle("localMusic4", "soundButton4", "soundIcon4");
});


document.addEventListener("DOMContentLoaded", function () {
  const portfolioTrigger = document.getElementById("portfolioTrigger");
  const popupPortfolio = document.getElementById("popupPortfolio");
  const overlay = document.getElementById("overlay");
  const closePopup = document.getElementById("closePopup");

  // Fungsi untuk menampilkan popup
  portfolioTrigger.addEventListener("click", function () {
      popupPortfolio.style.display = "block";
      overlay.style.display = "block";
      setTimeout(() => {
          popupPortfolio.style.transform = "translate(-50%, -50%) scale(1)";
      }, 50);
  });

  // Fungsi untuk menutup popup
  closePopup.addEventListener("click", function () {
      popupPortfolio.style.transform = "translate(-50%, -50%) scale(0.8)";
      setTimeout(() => {
          popupPortfolio.style.display = "none";
          overlay.style.display = "none";
      }, 300);
  });

  // Tutup popup jika klik di luar area popup
  overlay.addEventListener("click", function () {
      closePopup.click();
  });
});

