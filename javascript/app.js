let input = document.querySelector('.input')
let submit = document.querySelector('.submit')
let form = document.querySelector('.form')
let eror = document.querySelector('.eror')
let todosDom = document.querySelector('.todosDom')
let edit = document.querySelector('.edit')




let tod = JSON.parse(localStorage.getItem('list'))
    ? JSON.parse(localStorage.getItem('list'))
    : [];

if(tod.length) showtodolist()


function setLocalstorage(){
localStorage.setItem('list', JSON.stringify(tod))
}
function showtodolist(){
    const todos = JSON.parse(localStorage.getItem('list'))
    todosDom.innerHTML = ''
    todos.forEach((element, i) => {
       todosDom.innerHTML += `
       <li class="chaild">
                    <div class="check">
                        <input onclick="(check(${i}))" type="checkbox" name="" id="checkbox" />
                        <p class="edit">${element.tex}</p>
                    </div>
                    <div class="icon">
                    <img onclick="(editTodo(${i}))" src="./img/pen (1).svg" alt="edit" width="50px" height="50px">
                    <img onclick="(deletTodo(${i}))" src="./img/delete (1).svg" alt="delete" width="50px" height="50px">
                    </div>
        </li>
       ` 
    });
}

function clear(){
input.value = ""
}
submit.addEventListener('click', function () {
let inputTex = input.value.trim()
    if (!inputTex.length) {
        eror.textContent = 'Reja kiritish shart...!'
        eror.style.color = 'red'
        input.focus()
        form.style.borderColor = 'red'
        setTimeout(() => {
            eror.textContent = ''
            form.style.borderColor = 'teal'
        }, 2000)
        return false 
    } else {
     tod.push({tex:inputTex})  
    }
    setLocalstorage()
    showtodolist()
    clear()
});

function deletTodo(id){
const deletidTodos = tod.filter((item, i) =>{
    return i !== id
})
tod = deletidTodos
setLocalstorage()
showtodolist()
}

function editTodo(id){
    const edit = tod.filter((item, i) =>{
        return i == id
    })
    console.log(edit);
}


function check(id){
    const chesk = tod.filter((item, i) =>{
        return i == id
    })
    console.log(chesk);
    }