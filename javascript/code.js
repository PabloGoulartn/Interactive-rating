document.addEventListener('DOMContentLoaded', function(){
    let userRating;

    function updateRating(button){
        userRating = button.textContent;
    }

    document.querySelectorAll('.rating-button').forEach(function(button) {
        button.addEventListener('click', function(){
            updateRating(button);
        })
    })

    document.querySelector('.submit').addEventListener('click', function(){
        localStorage.setItem('userRating', getRating());
    });
});