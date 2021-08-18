document.getElementById('add-btn').addEventListener('click', function(){
    let inputValue = document.getElementById('create-todo').value;
   if(inputValue != ''){
    const parent = document.getElementById('parent-element');
    const div = document.createElement('div');
    div.classList.add('flex','justify-between','my-3','my-4');
    const paragraph =  document.createElement('p');
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.classList.add('px-4','py-2','rounded-xl','bg-purple-200','button','text-purple-700','font-medium');
    paragraph.classList.add('text-white','text-xl','py-2','para');
    paragraph.innerText = inputValue;
    div.appendChild(paragraph);
    div.appendChild(button);
    parent.appendChild(div);
    document.getElementById('create-todo').value = "";
   }else{
       return;
   }
})

let isDone = false;
document.getElementById('parent-element').addEventListener('click', function(event){
   if(event.target.classList.contains('para') && !isDone){
        event.target.style.textDecoration = "line-through";
        isDone = true;
   }else if(isDone){
        event.target.style.textDecoration = "none";
        isDone = false;
   }else if(event.target.classList.contains('button')){
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
   }
})