const selects = document.querySelectorAll('.filter-grid select')
const container_selects = document.querySelector('.filter-grid')

container_selects.addEventListener("click", function (e) {
  selects.forEach(elem_select => {
    elem_select.addEventListener("change", function (e) {
      e.stopPropagation()
      if (elem_select.value > 0) {
        elem_select.style.backgroundColor = "#203354"
        elem_select.style.color = "white"
        if (elem_select.getAttribute("name") === "area" || elem_select.getAttribute("name") === "tipo") {
          elem_select.classList.add("seleccionado")
          
        }else{
          elem_select.classList.add("selected")
        }

      } else {
        elem_select.style.backgroundColor = "white"
        elem_select.style.color = "#203354"
        if (elem_select.getAttribute("name") === "area" || elem_select.getAttribute("name") === "tipo") {
          elem_select.classList.remove("seleccionado")
        }else{
          elem_select.classList.remove("selected")
        }
      }
    })
  })
})

const selec_area = document.getElementById('area-filter')
selec_area.addEventListener("change", function(e){
  
  let option_select = selec_area.value
  console.log(option_select)
  if(option_select.length > 0){
    document.querySelector('a.one-select').innerHTML = ` ${option_select}`
  }else{
    document.querySelector('a.one-select').innerHTML = ""
  }
})

const tipo = document.getElementById('tipo')
tipo.addEventListener("change", function(e){
  
  let option_select = tipo.value
  console.log(option_select)
  if(option_select.length > 0){
    document.querySelector('a.two-select').innerHTML = ` / ${option_select}`
  }else{
    document.querySelector('a.two-select').innerHTML = ""
  }
})