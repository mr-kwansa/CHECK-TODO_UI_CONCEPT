//listen for authentication state change
auth.onAuthStateChanged(user => {
  if(user != null){
    window.location.href = './main_page.html'
  }
});

//signup
const signupForm = document.querySelector('#user_details');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get the user information
    const fullname = signupForm['fullname'].value;
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value;

    //signup the user
    auth.createUserWithEmailAndPassword(email, password).then(Credential =>{
        alert('Sign up successful');
        signupForm.reset();
        //window.location.href = "./main_page.html";
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  console.log(error);
  });
});


//login
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['loginEmail'].value;
  const password = loginForm['loginPassword'].value;

//login the user
auth.signInWithEmailAndPassword(email, password).then(credential =>{
  console.log(credential.user);
  loginForm.reset();
  alert('Login successful');
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  console.log(errorCode);
  });
})