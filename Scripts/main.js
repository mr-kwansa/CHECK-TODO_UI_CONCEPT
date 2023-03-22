//Track the authenticaiton state
auth.onAuthStateChanged(user =>{
    if(user == null){
        window.location.href = './index.html';
    }
});

//Logout
function logout(e){
    e.preventDefault();
    auth.signOut();
  }

  db.collection('todo-items').get().then(snapshot => {
    setUpTasksLayout(snapshot.docs);
  })