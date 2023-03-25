//Tracks the authenticaiton state
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    document.querySelector('#userEmail').innerHTML  = 'Logged in as ' + user.email
  }
  else {
    window.location.href = './index.html';
  }
});

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
  }).catch(error => {
    alert(error.message);
  });
}

