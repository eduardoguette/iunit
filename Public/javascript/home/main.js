/* const btn_schedule = document.querySelector(".btn-desplegable.shu");
const btn_news = document.querySelector(".btn-desplegable.news");

btn_schedule.addEventListener("click", function (e) {
  e.preventDefault();
  let element = document.querySelector("#schedule");
  if (element.className != "is-hidden") {
    element.className = "is-hidden";
    document.getElementById("schedule").style.transition = "all 2s";
    document.getElementById("schedule").width = "400px";
  } else {
    element.className = "wrapper schedule";
    document.getElementById("schedule").style.transition = "all 2s";
  }
});
btn_news.addEventListener("click", function (e) {
  e.preventDefault();
  let a = document.querySelector("#news-section");

    if (a.className != "is-hidden") {
      a.className = "is-hidden";
      document.getElementById(".news-grid.grid").style.transition = "all 2s";
      document.getElementById(".news-grid.grid").width = "400px";
    } else {
      a.className = "news-grid grid";
    }
}); */
/*   if (document.querySelector(".schedule .wrapper").contains("is-hidden")) {
  document.querySelector(".schedule .wrapper").className = ".schedule .wrapper";
} else {
  document.querySelector(".schedule .wrapper").className = "is-hidden";
}*/

const elemento_pag = document.querySelector(".container-pag");
if (elemento_pag) {
  elemento_pag.addEventListener("click", function (e) {

    if (e.target.tagName === "A") {
      document.querySelectorAll(".container-pag > a").forEach((elem) => {
        if (elem.className == "num is-active") {
          elem.className = "num";
        } else {
          e.target.className = "num is-active";
        }
      });
    }
  });
}


let menu = document.querySelector("#menu")
menu.addEventListener("click", function (e) {
  e.preventDefault()
  if (document.querySelector('.header-menulist').classList.contains("is-hidden")) {
    document.querySelector("header.header").classList.add("fixed")
    setTimeout(()=>{

      document.querySelector('.header-menulist').classList.remove("is-hidden")
    },1)
    document.getElementById('menu').className = "menu-quit"
  } else {

      document.querySelector("header.header").classList.remove("fixed")
    document.querySelector('.header-menulist').classList.add("is-hidden")
    document.getElementById('menu').className = ("menu")
  }
})