let number;

function getRating(){
    return number;
}

document.querySelectorAll('.rating-button').forEach(function(button) {
    button.addEventListener('click', function(){
        number = button.textContent;
    })
})

document.querySelector('.submit').addEventListener('click', function(){
    alert(getRating());
});