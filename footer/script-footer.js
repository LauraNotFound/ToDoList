document.addEventListener("DOMContentLoaded", function () {
    fetch('/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer: ', error));
});
