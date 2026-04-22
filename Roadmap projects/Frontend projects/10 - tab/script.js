const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll(".button");
const line = document.querySelector(".line");

buttons.forEach((button, index) => {
    // set the position of the lin3 on loading
    if (index === 0) {
        line.style.left = button.offsetLeft + "px";
        line.style.width = button.offsetWidth + "px";
    }
    button.addEventListener("click", () => {

        // removing the selected style
        buttons.forEach(button => {
            button.classList.remove("selected")
        })
        // adding style to the selected tab
        button.classList.add("selected")
        // movement and changing the width of the line
        line.style.left = button.offsetLeft + "px";
        line.style.width = button.offsetWidth + "px";
        console.log('clicked', index, button.offsetLeft)
        // hidding the contents of the tabs
        tabs.forEach(tab => {
            tab.classList.add("hidden");
        })
        // displaying the contents of the selected tab
        tabs[index].classList.remove("hidden");
    })
});
buttons.forEach((button, index) => console.log(index, button.offsetLeft))