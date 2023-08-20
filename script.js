const sidebarButton = document.getElementById('sidebarButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

sidebarButton.addEventListener('click', function() {
  sidebar.classList.add('open');
  sidebarButton.classList.add('hidden');
});

closeButton.addEventListener('click', function() {
  sidebar.classList.remove('open');
  sidebarButton.classList.remove('hidden');
});
