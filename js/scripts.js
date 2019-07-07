var writeUs = document.querySelector(".write-us");

var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");

var overlay = document.querySelector(".overlay");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("[name=user-message]");
var inputs = form.querySelectorAll(".input-field");

var isStorageSupport = true;
var storage = "";

try {
    storage = [
        localStorage.getItem("userName"),
        localStorage.getItem("userEmail")
    ];
} catch (err) {
    isStorageSupport = false;
}

writeUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-appear");
    popup.classList.add("modal-show");
    overlay.style.display = "block";
});

close.addEventListener("click", function(evt) {
    evt.preventDefault;
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-appear");
    overlay.style.display = "none";
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault;
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-appear");
    overlay.style.display = "none";
});

form.addEventListener("submit", function(evt) {
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            evt.preventDefault();
            inputs[i].classList.add("invalid");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("userName", userName.value);
                localStorage.setItem("userEmail", userEmail.value);
            }
        }
    }
});

function removeInvalid() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("invalid");
    }
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            overlay.style.display = "none";
        }
    }
});

var openMap = document.querySelector(".open-map");

var map = document.querySelector(".modal-map");
var closeMap = map.querySelector(".modal-close");

openMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
    overlay.style.display = "block";
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault;
    map.classList.remove("modal-show");
    overlay.style.display = "none";
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault;
    map.classList.remove("modal-show");
    overlay.style.display = "none";
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map.classList.contains("modal-show")) {
            map.classList.remove("modal-show");
            overlay.style.display = "none";
        }
    }
});
