let agebtn = document.getElementById('agegen');



agebtn.addEventListener('click', function () {

  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;


  let date = new Date(); 
  let d2 = date.getDay();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  let month2 = 30;
  let year2 = 12;

  
  if (day > d2) {
    d2 = d2 + month2;
    m2 = m2 - 1;
    
  }

  if (month > m2) {
    m2 = m2 + year2;
    y2 = y2 - 1;
  }

  if (year > y2) {
    alert("Please Enter valid year");
    
  } else {
    
  let d = d2 - day;
  let m = m2 - month;
  let y = y2 - year;

  document.getElementById("age").innerHTML = 'Your Age is '+y+' Years '+m+' Months ' +d+ ' Days';


  }


  
})