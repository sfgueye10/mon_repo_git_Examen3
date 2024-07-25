async function loadHTML() {
    const includes = document.querySelectorAll('[data-include]');
    for (const el of includes) {
        const file = el.getAttribute('data-include');
        try {
            console.log(`Chargement du fichier: ${file}`);
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier: ${response.statusText}`);
            }
            const data = await response.text();
            el.innerHTML = data;
            console.log(`Fichier chargé avec succès: ${file}`);
        } catch (error) {
            console.error('Erreur de chargement du fichier:', error);
            el.innerHTML = '<p>Erreur de chargement du contenu. Veuillez réessayer plus tard.</p>';
        }
    }
}

document.addEventListener('DOMContentLoaded', loadHTML);
