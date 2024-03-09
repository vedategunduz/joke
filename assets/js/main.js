const checkboxs = document.querySelectorAll(".checkbox");

checkboxs[0].addEventListener("click", () => {
    checkboxs[0].classList.toggle("checked");

    if (checkboxs[1].classList.contains("checked") && checkboxs[2].classList.contains("checked"))
        checkboxs[2].classList.remove("checked");
})
checkboxs[1].addEventListener("click", () => {
    checkboxs[1].classList.toggle("checked");

    if (checkboxs[0].classList.contains("checked") && checkboxs[2].classList.contains("checked"))
        checkboxs[2].classList.remove("checked");
})
checkboxs[2].addEventListener("click", () => {
    checkboxs[2].classList.toggle("checked");

    if (checkboxs[0].classList.contains("checked") && checkboxs[1].classList.contains("checked"))
        checkboxs[1].classList.remove("checked")
})