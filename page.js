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