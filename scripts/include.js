document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les éléments avec l'attribut data-include
    const includes = document.querySelectorAll('[data-include]');

    // Utiliser Promise.all pour attendre que toutes les requêtes fetch soient complètes
    Promise.all(Array.from(includes).map(async (include) => {
        // Récupérer l'URL du fichier à inclure
        const file = include.getAttribute('data-include');
        
        try {
            // Effectuer la requête fetch pour récupérer le contenu du fichier
            const response = await fetch(file);

            // Vérifier si la réponse est correcte
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            // Lire le contenu du fichier
            const content = await response.text();

            // Insérer le contenu dans l'élément
            include.innerHTML = content;
        } catch (error) {
            console.error(`Impossible de charger le fichier ${file}:`, error);
            include.innerHTML = `<p>Erreur de chargement du fichier ${file}. Veuillez réessayer plus tard.</p>`;
        }
    })).then(() => {
        // Code qui dépend du chargement complet du contenu HTML
        console.log('Tout le contenu HTML a été chargé et inséré.');
    });
});
