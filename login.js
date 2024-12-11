document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  console.log(error)

  
  if(email==="sankey901@solutions.com"){
    if(password==="mindset"){
      window.location="welcome.html"
    }
    else{
      error.classList.remove("hidden");
      error.innerText="Invalid password"
      
    }
  }
  else{
   error.classList.remove("hidden");
   error.innerText="Invalid email"
   
  }
});


