document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const profilePicture = document.getElementById('profile-picture');
    const uploadButton = document.getElementById('upload-button');

    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;
                uploadButton.style.display = 'none'; // Oculta o botão de upload
            };
            reader.readAsDataURL(file);
        }
    });

    uploadButton.addEventListener('click', function () {
        fileInput.click();
    });

    profilePicture.addEventListener('click', function () {
        fileInput.click();
    });
});


