
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const list = [];

const getReserveText = () => {
    const text = input.value;


    if(text) {
        const reserveText = text.split("").reverse().join("")

        list.push(reserveText)
        input.value ="";
        ul.innerHTML = "";

    }





    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li)
    })

}

button.onclick = () => getReserveText();