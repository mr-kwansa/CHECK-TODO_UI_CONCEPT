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
        console.log(Credential.user);
        alert('Sign up successful');
        signupForm.reset();
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  });
})