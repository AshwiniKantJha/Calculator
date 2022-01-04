function myFunc(vmro) {
        document.getElementById(vmro);
        document.body.style.Color="lightgreen";
        }

function changeclassstyle() {
  var c = document.getElementsByClassName("buttons");
  for (var i=0; i<c.length; i++) {
    c[i].style.fill = "red";
  }
}
