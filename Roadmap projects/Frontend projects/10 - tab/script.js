const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll(".button");
const line = document.querySelector(".line");

buttons.forEach((button, index) => {
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
        // hidding the contents of the tabs
        tabs.forEach(tab => {
            tab.classList.add("hidden");
        })
        // displaying the contents of the selected tab
        tabs[index].classList.remove("hidden");
    })
});