document.addEventListener('DOMContentLoaded', function(){
    const userRating = localStorage.getItem('userRating');

    document.querySelector('.rating-message').textContent = `Sua classificação foi ${userRating} de 5`;
})