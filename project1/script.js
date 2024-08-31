var pass = document.getElementById('password');
var icon = document.getElementById('toggler');


icon.addEventListener('click', function () {
  
  if (pass.type == "password") {
    pass.setAttribute('type', 'text');
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");

  
}
  else {
    pass.setAttribute('type', 'password');
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
}

});