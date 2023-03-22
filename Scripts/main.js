auth.onAuthStateChanged(user =>{
    if(user == null){
        window.location.href = './index.html';
    }
});

function logout(e){
    e.preventDefault();
    auth.signOut().then(() => {
      alert('Successfully logged out!');
    })
  }