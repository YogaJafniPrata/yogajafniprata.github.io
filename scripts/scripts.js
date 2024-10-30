document.querySelector(".switch").addEventListener("click", (event) => {
    event.target.classList.toggle("on");
})
document.getElementById('language-switch').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('greeting').textContent = 'Dasar Portofolio dan CV';
        document.getElementById('about-me').textContent = 'Mengenai Saya.';
        document.getElementById('language-label').textContent = 'Bahasa Indonesia';
    } else {
        document.getElementById('greeting').textContent = 'Base Portfolio and CV';
        document.getElementById('about-me').textContent = 'About Me';
        document.getElementById('language-label').textContent = 'English';
    }
  });