
const setUpTasksLayout = (data) => {

    let container = '';
    data.forEach(docs => {
        const task = docs.data();
        const li = `
        <li>
            <div>${task.text}</div>
            <div>${task.status}</div>
        </li><br>
        `;
        container += li;
    });
    document.querySelector('.tasks').innerHTML = container;
}