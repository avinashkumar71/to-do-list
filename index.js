const input_element = document.getElementById('input-box');
const btn_element = document.getElementById('btn-click');
const list_element = document.getElementById('list-container');
const ptn_element = document.getElementById('ptn');

btn_element.addEventListener('click',function(){
    if(input_element.value==''){
        alert('enter valid text');
    }else{
        const li = document.createElement('li');
        li.innerHTML = input_element.value;
        list_element.appendChild(li);
    }
    input_element.value = '';
    savedata();
});

list_element.addEventListener('click',(event)=>{
    if(event.target.tagName =='LI'){
        event.target.classList.toggle('checked');
        savedata();
    }
});

function savedata(){
    localStorage.setItem('data',list_element.innerHTML);
};

function getdata(){
    list_element.innerHTML = localStorage.getItem('data');
};

getdata();
