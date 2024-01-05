document.querySelectorAll('.rating-button').forEach(function(button) {
    button.addEventListener('click', function(){
        alert(button.textContent)
    })
})