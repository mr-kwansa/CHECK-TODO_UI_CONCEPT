const taskList = document.querySelector('.tasks');

const setUpTasksLayout = (data) => {

    let container = '';
    data.forEach(docs => {
        const task = docs.data();
        console.log(task);
        const li = `
        <li>
            <div>${task.text}</div>
            <div>${task.status}</div>
        </li>
        `;
        container += li;
    });
    document.querySelector('.tasks').innerHTML = container;
}