document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async (include) => {
        const file = include.getAttribute('data-include');
        const response = await fetch(file);
        const content = await response.text();
        include.innerHTML = content;
    });
});
