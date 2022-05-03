var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

  function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var Course=document.myform.Course.value;  
    var Author=document.myform.Author.value; 
      
    if (name==null || name==""){  
      alert("Student name can't be blank");  
      return false;  
    }
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;
      }else if(isNaN(password) || isNaN("")){
          alert("Please enter number");
          return false;
      }
    if(Course==null || Course==""){  
      alert("Course name can't be blank");  
      return false;}
    else if(Author==null || Author==""){  
      alert("Author's name can't be blank");  
      return false;}
    }
    function myFunction1() {
      location.assign("https://www.w3schools.com/html/default.asp")
    }

    function myFunction2() {
      location.replace("https://www.w3schools.com/css/default.asp")
    }

    function myFunction3() {
      location.replace("https://www.w3schools.com/js/default.asp")
    }
    function myFunction4() {
      location.replace("https://www.w3schools.com/sql/default.asp")
    }

    function myFunction5() {
      location.replace("https://www.w3schools.com/python/default.asp")
    }
    function myFunction6() {
      location.replace("https://www.w3schools.com/php/default.asp")
    }

    function myFunction7() {
      location.replace("https://www.w3schools.com/java/default.asp")
    }
    function myFunction8() {
      location.replace("https://www.w3schools.com/c/index.php")
    }
