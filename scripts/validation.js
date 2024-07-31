document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    // Expressions régulières pour la validation
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/; // Nom peut contenir des lettres, espaces, apostrophes, et tirets
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format d'email valide
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mot de passe : au moins 8 caractères, lettres et chiffres
    const postalCodeRegex = /^[A-Za-z0-9\s-]+$/; // Code postal acceptant lettres, chiffres, espaces et tirets

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Réinitialiser les messages précédents
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.getElementById('form-message').textContent = '';

        // Validation du Nom
        const name = form.querySelector('#nom').value;
        if (!nameRegex.test(name)) {
            document.getElementById('nom-error').textContent = 'Nom invalide. Veuillez entrer un nom valide.';
            isValid = false;
        }

        // Validation du Prénom
        const prenom = form.querySelector('#prenom').value;
        if (!nameRegex.test(prenom)) {
            document.getElementById('prenom-error').textContent = 'Prénom invalide. Veuillez entrer un prénom valide.';
            isValid = false;
        }

        // Validation de la Date de Naissance
        const date = form.querySelector('#date').value;
        if (!date) {
            document.getElementById('date-error').textContent = 'Date de naissance requise.';
            isValid = false;
        }

        // Validation de l'Email
        const email = form.querySelector('#email').value;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Email invalide. Veuillez entrer une adresse email valide.';
            isValid = false;
        }

        // Validation du Mot de Passe
        const password = form.querySelector('#password').value;
        if (!passwordRegex.test(password)) {
            document.getElementById('password-error').textContent = 'Mot de passe invalide. Il doit contenir au moins 8 caractères, incluant des lettres et des chiffres.';
            isValid = false;
        }

        // Validation de la Confirmation du Mot de Passe
        const confirmPassword = form.querySelector('#confirm_password').value;
        if (password !== confirmPassword) {
            document.getElementById('confirm-password-error').textContent = 'Les mots de passe ne correspondent pas.';
            isValid = false;
        }

        // Validation de l'Adresse
        const adresse = form.querySelector('#adresse').value;
        if (!adresse) {
            document.getElementById('adresse-error').textContent = 'Adresse requise.';
            isValid = false;
        }

        // Validation de la Ville
        const ville = form.querySelector('#ville').value;
        if (!ville) {
            document.getElementById('ville-error').textContent = 'Ville requise.';
            isValid = false;
        }

        // Validation du Code Postal
        const codePostal = form.querySelector('#code_postal').value;
        if (!postalCodeRegex.test(codePostal)) {
            document.getElementById('code_postal-error').textContent = 'Code postal invalide. Veuillez entrer un code postal valide.';
            isValid = false;
        }

        // Afficher un message après soumission si valide
        if (isValid) {
            document.getElementById('form-message').textContent = 'Formulaire soumis avec succès!';
            event.preventDefault(); // Prévenir la soumission du formulaire
        } else {
            // Empêcher la soumission du formulaire si invalide
            event.preventDefault();
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    // Expressions régulières pour la validation
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/; // Nom peut contenir des lettres, espaces, apostrophes, et tirets
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format d'email valide

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Réinitialiser les messages d'erreur
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.getElementById('form-message').textContent = '';

        // Validation du Nom
        const name = form.querySelector('#nom').value;
        if (!nameRegex.test(name)) {
            document.getElementById('nom-error').textContent = 'Nom invalide. Veuillez entrer un nom valide.';
            isValid = false;
        }

        // Validation de l'Email
        const email = form.querySelector('#email').value;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Email invalide. Veuillez entrer une adresse email valide.';
            isValid = false;
        }

        // Validation du Message
        const message = form.querySelector('#message').value;
        if (!message.trim()) {
            document.getElementById('message-error').textContent = 'Le message ne peut pas être vide.';
            isValid = false;
        }

        // Afficher un message après soumission si valide
        if (isValid) {
            document.getElementById('form-message').textContent = 'Message Envoyer avec succès!';
            event.preventDefault(); // Prévenir la soumission du formulaire pour le test
        } else {
            // Empêcher la soumission du formulaire si invalide
            event.preventDefault();
        }
    });
});


