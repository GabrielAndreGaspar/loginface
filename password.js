let btn = document.querySelector("#eye")
let image = document.querySelector("#image")
let input = document.querySelector("#pass")

input.addEventListener('keyup', function () {

    if (input.value == "") {
        image.className = "hidden"
        btn.className = "hidden"
    }

    else {
        image.className = "active"
        btn.className = "eye-visible"
    }

})

btn.addEventListener('click', function () {

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        image.src = "images/visible.png"
    }

    else {
        input.setAttribute('type', 'password');
        image.src = "images/hidden.png"
    }

})
