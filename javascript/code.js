document.addEventListener('DOMContentLoaded', function(){
    let userRating;

    function updateRating(button){
        userRating = button.textContent;
    }

    document.querySelectorAll('.rating-button').forEach(function(button) {
        button.addEventListener('click', function(){
            updateRating(button);
            button.classList.add('selected');

            document.querySelectorAll('.rating-button').forEach(function(otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('selected');
                }
            });
        });
    });

    document.querySelector('.submit').addEventListener('click', function(event){
        if(!userRating)
        {
            event.preventDefault();
            alert('De uma classificação.');
        }
        else{
            localStorage.setItem('userRating', userRating);
        }
    });
});
