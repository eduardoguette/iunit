var child = document.querySelector('.router')
var title = document.querySelector('title').textContent;
child.innerHTML = title.slice(0, 35).concat("...");



if (document.querySelector('.container-nav-master-grid')) {
  const nav_master = document.querySelector('.container-nav-master-grid')
  const hr_div = document.querySelectorAll('.container-nav-master-grid hr')
  const element_active = document.querySelectorAll('.container-nav-master-grid p')
  const element_desc = document.querySelectorAll('.container-nav-master')

  nav_master.addEventListener("click", function (e) {
    //e.preventDefault();
    e.stopPropagation();

    let desc_select = e.toElement.classList[0].replace("select_active", "")

    var hr_elem_select = e.target.nextElementSibling;
    if (e.target.className.match("select_active") != 1) {
      element_active.forEach((p) => {
        p.classList.remove("select_active");
      })
      hr_div.forEach((hr) => {
        e.target.classList.add('select_active')
        hr.classList.remove("hr-yellow");
      })


      element_desc.forEach(text_div => {

        if (text_div.className.includes(desc_select)) {
          if (text_div.style.display == "none" || text_div.style.display.length < 1) {
            text_div.style.display = "block"
            text_div.classList.add("active")
          } else {
            console.log("quit")
            text_div.style.display = "none"
          }
        } else if (text_div.classList.contains("active")) {
          text_div.style.display = "none"
        }
      })
      hr_elem_select.classList.add("hr-yellow")

    }



  })
}


  var tr_table = document.querySelector('.container-table')
  tr_table.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelectorAll('tr.select-tr').forEach(elem =>{
      elem.classList.remove('select-tr')
    })
    e.path[1].classList.add('select-tr')
    
  })
