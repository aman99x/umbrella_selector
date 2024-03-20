document.addEventListener("DOMContentLoaded", function() {
    const umbrellaImg = document.querySelector('.umbrella');

    const colorButtons = document.querySelectorAll('.color-options button');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            if (color === '#007bff') {
                umbrellaImg.src = 'images/Blue umbrella.png';
            } else if (color === '#dc3545') {
                umbrellaImg.src = 'images/Yellow umbrella.png';
            } else if (color === '#28a745') {
                umbrellaImg.src = 'images/Pink umbrella.png';
            }
        });
    });
});
