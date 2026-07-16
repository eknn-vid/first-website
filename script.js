const button = document.querySelector("button");
const aboutSection = document.querySelector(".about");

button.addEventListener("click", function () {

    aboutSection.scrollIntoView({
        behavior: "smooth"
    });

    aboutSection.classList.add("show");

});