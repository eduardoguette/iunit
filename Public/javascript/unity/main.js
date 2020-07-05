
if (document.querySelector(".container-pag")) {
  let elemento_pag = document.querySelector(".container-pag");

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