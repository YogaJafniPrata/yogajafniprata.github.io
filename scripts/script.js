document.getElementById('language-switch').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('greeting').textContent = 'Indut Jelek';
      document.getElementById('welcome-message').textContent = 'Selamat datang di situs kami.';
      document.getElementById('language-label').textContent = 'Bahasa Indonesia';
  } else {
      document.getElementById('greeting').textContent = 'Indut Bau';
      document.getElementById('welcome-message').textContent = 'Welcome to our website.';
      document.getElementById('language-label').textContent = 'English';
  }
});