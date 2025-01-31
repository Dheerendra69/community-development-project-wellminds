const toggleButton = document.getElementById('toggle-night-mode');
const bodyElement = document.body;

function toggleNightMode() {
  bodyElement.classList.toggle('dark-mode');
}

toggleButton.addEventListener('click', toggleNightMode);

// Optional: Check for stored preference in local storage
const isDarkMode = localStorage.getItem('darkMode');
if (isDarkMode === 'true') {
  bodyElement.classList.add('dark-mode');
}
