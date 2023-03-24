var items =  [];
const setUpTasksLayout = (data) => {

    data.forEach(element => {
        items.push(element.data());
    });

    let container = '';
    var i = 0;
    items.forEach(docs => {
        const li = `
    <li>
        <div>${items[i].text}</div>
        <div>${items[i].status}</div><br>
    </li>
    `;
        container += li;
        i++;
    });
    document.querySelector('.tasks').innerHTML = container
}