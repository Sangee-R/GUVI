let post = document.querySelector('#post')
let takinginputdata = document.querySelector('textarea[name="inputdata"]')
let save = document.querySelector('#save')


function dataddding(data){
    let child_data = document.createElement('div')
        child_data.setAttribute('class','sour-div')
        child_data.innerHTML = `
        <p class="text-value" contenteditable="true">${data.value}</p>
        <p class="actions">
            <span onclick="edit_text(this)">Edit</span>
            <span onclick="delete_text(this)">Delete</span>
        </p>
        `
        document.querySelector('.left-container').append(child_data)
}

post.addEventListener('click',()=>{
    if (takinginputdata.value !=''){
        console.log('post button clicked');
        dataddding(takinginputdata)
    }
    takinginputdata.value = ''
})


function edit_text(e){
    let data_out = e.parentElement.previousElementSibling
    console.log(data_out.innerText);
    console.log('clincking edit');
    takinginputdata.value = data_out.innerText
    delete_text(e)
}

function delete_text(e){
    let data_out = e.parentElement.parentElement
    data_out.remove()
    console.log('clincking delete');

    `Delete the entire local storage`
    let length_of_local = Object.keys(localStorage)
    for (i of length_of_local){
        localStorage.removeItem(i)
    }
    
    `to save all the data after deletion`
    save_new_func()
}

save.addEventListener('click',()=>{
    save_new_func()
})

function save_new_func(){
        let data = document.querySelectorAll('.text-value')
        console.log(data);
        for(i=0;i<data.length;i++){
            localStorage.setItem(i,data[i].innerText)
        }
}

window.onload= function(){
    console.log('window is loaded');
    let local_keys = Object.keys(localStorage).sort()
    console.log(local_keys);
    for(let i of local_keys){
        let child_data = document.createElement('div')
        child_data.setAttribute('class','sour-div')
        child_data.innerHTML = `
        <p class="text-value">${localStorage[i]}</p>
        <p class="actions">
            <span onclick="edit_text(this)">Edit</span>
            <span onclick="delete_text(this)">Delete</span>
        </p>
        `
        document.querySelector('.left-container').append(child_data)
    }
    
}