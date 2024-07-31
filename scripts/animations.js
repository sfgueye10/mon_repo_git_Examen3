document.addEventListener('DOMContentLoaded', () => {
    const animationBox = document.getElementById('animation-box');
    if (animationBox) {
        animationBox.addEventListener('click', () => {
            animationBox.style.backgroundColor = 'blue';
            animationBox.textContent = 'Surprise !';
        });
    }

    function toggleVisibility(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }

    // Gestion des liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'red';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    // Animation sur clic
    const animatedElement = document.querySelector('.animation');
    if (animatedElement) {
        animatedElement.addEventListener('click', () => {
            animatedElement.classList.toggle('active');
            if (animatedElement.classList.contains('active')) {
                animatedElement.textContent = 'Surprise !';
                animatedElement.style.backgroundColor = 'blue';
            } else {
                animatedElement.textContent = 'Cliquez-moi pour une surprise !';
                animatedElement.style.backgroundColor = '';
            }
        });
    } else {
        console.error('L\'élément avec la classe "animation" n\'a pas été trouvé');
    }

    // Gestion du bouton pour afficher/masquer le paragraphe
    const toggleButton = document.getElementById('toggle-paragraph');
    const dynamicParagraph = document.getElementById('dynamic-paragraph');
    if (toggleButton && dynamicParagraph) {
        toggleButton.addEventListener('click', () => {
            toggleVisibility(dynamicParagraph);
        });
    } else {
        console.error('Le bouton ou le paragraphe n\'a pas été trouvé');
    }

    // Gestion du formulaire pour ajouter une image
    const imageForm = document.getElementById('image-form');
    const imageContainer = document.getElementById('image-container');
    if (imageForm && imageContainer) {
        imageForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const fileInput = document.getElementById('image-file');
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const newImage = document.createElement('img');
                    newImage.src = e.target.result;
                    newImage.alt = 'Nouvelle Image';
                    imageContainer.appendChild(newImage);
                };
                reader.readAsDataURL(file);
                imageForm.reset();
            }
        });
    } else {
        console.error('Le formulaire ou le conteneur d\'image n\'a pas été trouvé');
    }

    // Gestion du formulaire pour ajouter un paragraphe
    const paragraphForm = document.getElementById('paragraph-form');
    const paragraphContainer = document.getElementById('paragraph-container');
    if (paragraphForm && paragraphContainer) {
        paragraphForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const paragraphText = document.getElementById('paragraph-text').value;
            if (paragraphText) {
                const newParagraph = document.createElement('p');
                newParagraph.textContent = paragraphText;
                paragraphContainer.appendChild(newParagraph);
                paragraphForm.reset();
            }
        });
    } else {
        console.error('Le formulaire ou le conteneur de paragraphe n\'a pas été trouvé');
    }

    // Gestion du bouton pour supprimer un paragraphe
    const removeButton = document.getElementById('remove-paragraph');
    const paragraphToRemove = document.getElementById('paragraph-to-remove');
    if (removeButton && paragraphToRemove) {
        removeButton.addEventListener('click', () => {
            paragraphToRemove.remove();
        });
    } else {
        console.error('Le bouton ou le paragraphe à supprimer n\'a pas été trouvé');
    }

    // Gestion du bouton pour afficher/masquer le texte caché
    const showTextButton = document.getElementById('show-text');
    const hiddenText = document.getElementById('hidden-text');
    if (showTextButton && hiddenText) {
        showTextButton.addEventListener('click', () => {
            toggleVisibility(hiddenText);
        });
    } else {
        console.error('Le bouton ou le texte caché n\'a pas été trouvé');
    }
});
