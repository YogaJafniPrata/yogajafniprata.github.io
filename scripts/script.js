document.getElementById('language-switch').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('greeting').textContent = 'Basis Portofolio dan CV';
      document.getElementById('welcome-message').textContent = 'Selamat datang di situs kami.';
      document.getElementById('language-label').textContent = 'Bahasa Indonesia';
  } else {
      document.getElementById('greeting').textContent = 'Base Portofolio and CV';
      document.getElementById('welcome-message').textContent = 'Welcome to our website.';
      document.getElementById('language-label').textContent = 'English';
  }
});