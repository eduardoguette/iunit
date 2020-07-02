 const down_angle = document.querySelectorAll('div.prsri-btn i.fas.fa-angle-up').forEach(a =>{
  a.classList.add('angle-inactive')
})  
const info = document.querySelectorAll('.modal-info').forEach(a =>{
  a.classList.add('angle-inactive')
})  

document.querySelector('.prsri').addEventListener("click", function(e){
  e.preventDefault()
  console.log(e.target.className)
  let btns = e.path[2];
  let container = e.path[4]
  if(e.target.className == 'fas fa-angle-down'){
    btns.querySelector('.fas.fa-angle-up').classList.remove('angle-inactive')
    btns.querySelector('.fas.fa-angle-down').classList.add('angle-inactive')
    /* div info */
    container.querySelector('.modal-info').classList.remove('angle-inactive')
    console.log(container)
  }else{
    btns.querySelector('.fas.fa-angle-down').classList.remove('angle-inactive')
    btns.querySelector('.fas.fa-angle-up').classList.add('angle-inactive')
      /* div info */
    container.querySelector('.modal-info').classList.add('angle-inactive')
    console.log(e)
  }
})


const btnQuitForm = document.querySelector('.quit')
btnQuitForm.addEventListener("click", function (e){
  
  document.getElementById('form').classList.add('is-hidden')
})

const btn_info = document.querySelector('.icon-info')
btn_info.addEventListener("click", function(e){
  document.getElementById('form').classList.remove('is-hidden')
})