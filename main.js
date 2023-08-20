

let btn = document.querySelectorAll("button");

btn.forEach( b => {
    b.addEventListener("click",btnClick)
})

let ac = document.querySelector("#ac")
ac.removeEventListener("click",btnClick)
ac.addEventListener("click",clear)

let eq = document.querySelector("#eq")
eq.removeEventListener("click",btnClick)
eq.addEventListener("click",calculate)

let  calculate = () => {
    let valueEl = document.querySelector(".value")
     valueEl.textContent = eval(valueEl.textContent)
}

let clear = () => {
    document.querySelector(".value").textContent = ''
}

let btnClick = () => {
    document.querySelector(".value").textContent += this.textContent
}