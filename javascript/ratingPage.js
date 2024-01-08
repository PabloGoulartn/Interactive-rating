document.addEventListener('DOMContentLoaded', function(){
    const userRating = localStorage.getItem('userRating');

    document.querySelector('.teste').textContent = `Sua classificação foi ${userRating} de 5`;
})