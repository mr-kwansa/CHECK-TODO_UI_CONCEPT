//Tracks the authenticaiton state
var userId = '';
auth.onAuthStateChanged(user => {
  if (user) {
    userId = user.uid;
    console.log(user.uid);
    document.querySelector('#userEmail').innerHTML  = 'Logged in as ' + user.email
  }
  else {
    window.location.href = './index.html';
  }
});

console.log(userId);
//Logout
function logout(e) {
  e.preventDefault();
  auth.signOut();
}


//get items from the firestore database
db.collection('todo-items').onSnapshot(snapshot => {
  setUpTasksLayout(snapshot.docs);
});

//adds a task to the firestore database
function addItem(e) {
  e.preventDefault();
  const taskText = document.querySelector('.addTask');

  db.collection('todo-items').add({
        text: taskText['add_task_field'].value,
        status: 'active'
      }).then(() => {
        taskText.reset();
      })
}

