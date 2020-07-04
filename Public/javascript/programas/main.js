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

        } else {
          elem_select.classList.add("selected")
        }

      } else {
        elem_select.style.backgroundColor = "white"
        elem_select.style.color = "#203354"
        if (elem_select.getAttribute("name") === "area" || elem_select.getAttribute("name") === "tipo") {
          elem_select.classList.remove("seleccionado")
        } else {
          elem_select.classList.remove("selected")
        }
      }
    })
  })
})

const selec_area = document.getElementById('area-filter')
selec_area.addEventListener("change", function (e) {

  let option_select = selec_area.value
  console.log(option_select)
  if (option_select.length > 0) {
    document.querySelector('a.one-select').innerHTML = ` ${option_select}`
  } else {
    document.querySelector('a.one-select').innerHTML = ""
  }
})

const tipo = document.getElementById('tipo')
tipo.addEventListener("change", function (e) {

  let option_select = tipo.value
  console.log(option_select)
  if (option_select.length > 0) {
    document.querySelector('a.two-select').innerHTML = ` / ${option_select}`
  } else {
    document.querySelector('a.two-select').innerHTML = ""
  }
})






const header_desplegables = document.querySelectorAll('#desp-programas')
header_desplegables.forEach(desplegable => {
  desplegable.addEventListener("click", function (e) {
    e.stopPropagation()
    e.path.forEach(containter => {
      if (containter.className === 'header-desp') {
        if (containter.querySelector('p, .container-info > div').classList.contains('is-hidden')) {
          containter.querySelector('p, .container-info > div').classList.remove('is-hidden')
          containter.querySelector('i').classList.remove('fa-angle-down')
          containter.querySelector('i').classList.add('fa-angle-up')
          containter.querySelector('span').setAttribute("id", 'selected-desple')
          //containter.querySelector('i').classList.remove('fas fa-angle-down')

        } else {
          containter.querySelector('p, .container-info > div').classList.add('is-hidden')
          containter.querySelector('i').classList.add('fa-angle-down')
          containter.querySelector('i').classList.remove('fa-angle-up')
          containter.querySelector('span').classList.add('selected-desp')
          containter.querySelector('span').removeAttribute("id", 'selected-desple')

        }
      }
    })


  })
})