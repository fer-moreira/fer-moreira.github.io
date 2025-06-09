// Toggle category functionality
function toggleCategory(element) {
    const category = element.closest('.tech-category');
    const isActive = category.classList.contains('active');
    
    // Close all categories
    document.querySelectorAll('.tech-category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // If the clicked category wasn't active, open it
    if (!isActive) {
        category.classList.add('active');
    }
}

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    body.className = isDark ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', body.className);
});
