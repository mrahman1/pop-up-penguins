let gameHolder = document.getElementById("gameholder")
console.log('gameholder', gameHolder)
for (let i = 1; i <= 9; i++){
  let penguin = document.createElement("div")
  penguin.classList.add("penguin")
  penguin.classList.add("mound"+i)
  let imgURL = `./assets/mound_${i}.png`
  penguin.setAttribute("style", `background-image: url(${imgURL})`)
  gameHolder.appendChild(penguin)
}
