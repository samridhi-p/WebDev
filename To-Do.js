 const todoList=[{
    name:'make dinner',
    dueDate: '2025-08-19'},
    {name:'wash dishes',
    dueDate: '2025-08-20'},];

renderTodolist();

function renderTodolist()
{
    let todoListHTML = '';

    for(i=0 ; i<todoList.length; i++)
    {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `<p>
   ${name} ${dueDate}

    <button onclick="
    todoList.splice(${i}, 1);
    renderTodolist();
    ">Delete</button>
    </p> `;

    todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
    function addTodo()
    {
    
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputelement= document.querySelector('.js-duedate-input');
    const dueDate = dateInputelement.value;

    todoList.push({
        name,
        dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodolist();
    }