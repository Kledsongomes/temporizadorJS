let timerMinutes = document.querySelector('#minutes')
let timerSeconds = document.querySelector('#seconds')

let btnPlay = document.querySelector('#play')
let btnPause = document.querySelector('#pause')
let btnStop = document.querySelector('#stop')
let btnAdd = document.querySelector('#add')
let btnRemove = document.querySelector('#remove')

let buttonSoundFlorest = document.querySelector('#sound-florest')
let buttonSoundRain = document.querySelector('#sound-rain')
let buttonSoundcoffeeMachine = document.querySelector('#sound-coffe-machine')
let buttonSoundFirePlace = document.querySelector('#sound-fireplace')

const buttonPressAudioFlorest = document.querySelector('#bg-audio-florest')
const buttonPressAudioRain = document.querySelector('#bg-audio-rain')
const buttonPressAudioCoffeeMachine = document.querySelector('#bg-audio-coffee-machine')
const buttonPressAudioFirePlace =  document.querySelector('#bg-audio-fire-place')
let timer
let timerTimeOut

timer = Number (prompt('Quanto tempo?')) || 0
timerMinutes.textContent = String(timer).padStart(2,'0')

function countdown(){
  timerTimeOut = setTimeout(()=>{
    let second = Number(timerSeconds.textContent)
    let minutes = Number(timerMinutes.textContent)
    if(second <= 0 ){
      second = 10

      if(minutes <= 0){
        return 
      }
      timerMinutes.textContent = String(minutes - 1).padStart(2,'0')
    }
    timerSeconds.textContent = String(second - 1).padStart(2,'0')
    countdown()
  },1000)
}
function count(){
  let adicionar = Number(timerMinutes.textContent)
  if(adicionar >=60){
    return
  }
  timerMinutes.textContent = String(adicionar + 5).padStart(2,'0')
}

function remove(){
  let adicionar = Number(timerMinutes.textContent)
  if(adicionar >0 && adicionar <= 4){
   return (timerMinutes.textContent = String(adicionar - 1).padStart(2,'0'))
  }
  if(adicionar <= 0){
    return
  }
  timerMinutes.textContent = String( adicionar - 5).padStart(2,'0')
}

btnPlay.addEventListener('click', ()=>{
  
  countdown()
})

btnPause.addEventListener('click',()=>{
  clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click',()=>{
  timerMinutes.textContent = '00'
  timerSeconds.textContent = '00'
})

btnAdd.addEventListener('click',()=>{
  count()
})

btnRemove.addEventListener('click',()=>{
  remove()
})

buttonSoundFlorest.addEventListener('click',()=>{
  buttonPressAudioFlorest.play()
})

buttonSoundRain.addEventListener('click',()=>{
  buttonPressAudioRain.play()
})

buttonSoundcoffeeMachine.addEventListener('click',()=>{
  buttonPressAudioCoffeeMachine.play()
})
buttonSoundFirePlace.addEventListener('click',()=>{
  buttonPressAudioFirePlace.play()
})