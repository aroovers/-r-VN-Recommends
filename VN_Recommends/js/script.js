window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("ScrollDown").style.display = "none";
    } else {
        document.getElementById("ScrollDown").style.display = "block";
    }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnContainermob = document.getElementById("myBtnContainermob");
var btns = btnContainermob.getElementsByClassName("btnmob");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}

// Dropdown Menu
function OpenTheMenu() {
  document.getElementById("MenuOverlay").style.height = "100%";
  document.getElementById("MenuOverlay").style.width = "100%";
  document.getElementById("Body").style.marginLeft = "30%";
  document.getElementById("Menu").style.display = "none";
}

function CloseTheMenu() {
  document.getElementById("MenuOverlay").style.height = "0";
  document.getElementById("MenuOverlay").style.width = "0";
  document.getElementById("Body").style.marginLeft = "0";
  document.getElementById("Menu").style.display = "block";
}

// Sticky Function
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("Menu");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener('scroll', scrollFunction);
window.addEventListener('scroll', stickyFunction);