var arrowDown = document.querySelectorAll(".show_hide");

for(var i=0; i<arrowDown.length; i++){
  arrowDown[i].addEventListener("click",function(){
    this.parentElement.parentElement.lastElementChild.classList.toggle("show");
    this.classList.toggle("flip");
    this.parentElement.classList.toggle("change_color");
  })
}
