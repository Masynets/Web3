
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('light', themeSwitch.checked);
});


const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
});