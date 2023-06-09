const inputtxt = document.getElementById('input');

const btn = document.getElementById('add');

const todolist = document.getElementById('todoList')

let arr=[];


window.onload = () => {

    arr = JSON.parse(localStorage.getItem('todos')) || [];

    arr.forEach(element => {
        addtodo(element)
    });
}

 
btn.addEventListener('click',()=>{

    arr.push(inputtxt.value)

    console.log(arr);

    addtodo(inputtxt.value);

    localStorage.setItem("todos",JSON.stringify(arr))

    inputtxt.value = ""
})

const addtodo = (todo) => {
    let para = document.createElement('p')
    para.innerText = todo;
    todolist.appendChild(para)
   
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo) 
    })

    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo) 
    })

}

function remove(todo)
{
    let index = arr.indexOf(todo)

    if(index>-1)
    {
        arr.splice(index,1)
    }

    localStorage.setItem("todos",JSON.stringify(arr))
}