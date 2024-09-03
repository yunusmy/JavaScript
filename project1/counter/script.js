let textbox = document.getElementById('textarea');
let counter = document.querySelector('#counter');
let limitcross = document.querySelector('.color');

window.alert("go");

textbox.addEventListener('keyup', function () {
  
  let inputdata =textbox.value;
  let lettercount = inputdata.length;

  if (lettercount >= 100) {
    textbox.setAttribute("maxlength", "100");
    limitcross.style.color = 'red';
  } else {
    textbox.removeAttribute("maxlength");
    limitcross.style.color = '#3344aa';
  }
  counter.innerHTML = lettercount;

});