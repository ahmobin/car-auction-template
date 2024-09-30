document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdown = this.closest('.dropdown');
    dropdown.classList.toggle('active');
});
