document.addEventListener("DOMContentLoaded", function() {
    const umbrellaImg = document.querySelector('.umbrella');
    const colorButtons = document.querySelectorAll('.color-options button');
    const uploadButton = document.getElementById('uploadButton');
    const logoImg = document.querySelector('.logo');

    uploadButton.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/png, image/jpeg';
        input.click();
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    umbrellaImg.style.position = 'relative'; 
                    logoImg.src = e.target.result;
                    logoImg.style.position = 'absolute'; 
                    logoImg.style.top = '76%'; 
                    logoImg.style.left = '33%'; 
                    logoImg.style.transform = 'translate(-50%, -50%)'; 
                    logoImg.style.maxWidth = '40px'; 
                    logoImg.style.maxHeight = '40px'; 
                };
                reader.readAsDataURL(file);
            }
        });
    });

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
