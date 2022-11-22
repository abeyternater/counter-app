
let countBtn = document.getElementById("count")
let lapsCompleted = 0
console.log(countBtn)
function increment() {
    lapsCompleted += 1
    countBtn.textContent = lapsCompleted
}

let prevSaved = document.getElementById("prev-Saved")
let i = 0
function save(){
  let dashAndLapsCompleted = " - " + lapsCompleted
  console.log(countBtn)
  if(i == 0){
  prevSaved.textContent += lapsCompleted
  }else{
    prevSaved.textContent += dashAndLapsCompleted
  }
  countBtn.innerText = 0
  lapsCompleted = 0
  i += 1
}
