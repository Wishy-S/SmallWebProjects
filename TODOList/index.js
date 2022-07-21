function addtoList(){
    let taskname = document.getElementById('taskname').value;
    let tododiv = document.getElementById('mytodo');

    let newtodoitem = document.createElement('div');
    let todoname = document.createElement('li');
    todoname.innerHTML = taskname;
    let deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');

    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(deletebtn);

    tododiv.appendChild(newtodoitem);
}
let tododiv = document.getElementById('mytodo');
tododiv.addEventListener('click',deleteitem);

function deleteitem(e){
    const ele = e.target;
    if(ele.classList[0] == 'far'){
        ele.parentElement.remove();
    }
}
