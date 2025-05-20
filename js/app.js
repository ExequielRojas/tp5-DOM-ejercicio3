function agregarTarea(e){
e.preventDefault();
const lista = document.querySelector('.list-group');
const tarea = document.querySelector('#input-tarea').value;

lista.innerHTML = lista.innerHTML + `<li class="list-group-item col-md-auto d-flex justify-content-between">${tarea} <button class="btn btn-danger btn-sm">Borrar</button></li>`
formularioTarea.reset();
}

function quitarTarea(e){
    if(e.target.classList.contains('btn-danger')){
        e.target.parentElement.remove();
    }
}

const formularioTarea = document.querySelector('#tareaForm');
const btnBorrartarea = document.querySelector('.list-group');


formularioTarea.addEventListener('submit', agregarTarea);
btnBorrartarea.addEventListener('click', quitarTarea);