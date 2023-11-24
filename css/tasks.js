document.addEventListener('DOMContentLoaded',function (){
    var submit = document.getElementById("submit");
    var newTask = document.getElementById("task");
    var taskList = document.getElementById("tasks")
    var taskForm = document.getElementById("taskForm")
   
    submit.disabled = true;
   
    newTask.addEventListener('input',function(){
        submit.disabled = !newTask.value.trim();
    });
    
    taskForm.addEventListener('submit', function (event) {
         event.preventDefault();
         var new_Task = newTask.value.trim();
         var item = document.createElement('li');
         item.textContent = new_Task;
         taskList.appendChild(item);
         newTask.value = '';
         submit.disabled = true;
         return false;
       
     });

});