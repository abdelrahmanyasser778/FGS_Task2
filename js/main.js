function showTime(){



var now =new Date();
hours = now.getHours();
minutes = now.getMinutes();
seconds=now.getSeconds();
if(hours < 10){
    hours = '0'+hours
}
if(minutes < 10){
    minutes = '0'+minutes
}
if(seconds < 10){
    secounds = '0'+seconds
}
document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds; 
}
window.onload = function(){
    setInterval(showTime,500);
}



let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let websitess = document.querySelector('.websites');


input.addEventListener('keyup',()=>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
})


addBtn.addEventListener('click', ()=>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
         newItem.classList.add('item');
         newItem.innerHTML=`
            <p> ${input.value} </p>
            <div class="item-btn">
            
            <i class="fa fa-ban"></i>
            </div>
         `
         websitess.appendChild(newItem);
         input.value = '';
        
    }else{
        alert('Please enter a website')
    }
})

websitess.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-ban')){
        e.target.parentElement.parentElement.remove();
    }
})