const textarea = document.getElementById("text");
const count = document.getElementById("count");
const counter = document.querySelector('.counter')
const clearBtn = document.getElementById("clearBtn");
const textareaBox = document.querySelector('.textarea-box')

function updateCount() {
    count.textContent = textarea.value.length;
    if (textarea.value.length >= 250) {
        textarea.style.color = 'red'
        textareaBox.style.border = '2px solid red'
        counter.style.color = 'red'
    }
}

textarea.addEventListener("input", updateCount);

clearBtn.addEventListener("click", () => {
    textarea.value = "";
    updateCount();
    textarea.focus();
    textarea.style.color = '#2b2330'
    textareaBox.style.border = '1.5px solid rgba(106, 96, 104, 0.75)'
    counter.style.color = 'black'
});

updateCount();