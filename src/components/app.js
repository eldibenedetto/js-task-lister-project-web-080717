class App {
  //your code here!
  constructor() {
    this.lists = [];
  }

  render() {
    $("#create-list-form").submit((event) => {
      event.preventDefault()
      var listTitle = $("#new-list-title").val()

      if(listTitle !== ""){
        let list = new List(listTitle)
        $("#parent-list").append(list.renderDropdown())
        $("#new-list-title").val("");
      } else{
        alert("Please enter a list title!")
      }

    })

    $("#create-task-form").submit((event) =>{
      let listId = $("#parent-list").val();
      let taskPriority = $("#new-task-priority").val();
      let taskDescription = $("#new-task-description").val();
      event.preventDefault()

      if (listId && taskPriority && taskDescription){

        let listToAddTo = List.all().find((list)=> list.id == listId);
        listToAddTo.addTaskToList(taskDescription, taskPriority)
        $("#lists").html(List.all().map(function(list){
          return list.render();
        }).join("")
      )
      $("#new-task-priority").val("");
      $("#new-task-description").val("");
      }else{
        alert("Hey! Pay attention!!!!")
      }

      $('body').on('click', '.deleteList', (event)=>{
        let id = event.target.id;
        App.deleteList(id);
      })

    })
  }

  static deleteList(id){
    for(let i= List.all().length - 1; i>= 0 ; i--){
      if(List.all()[i].id == id){
        // debugger;
        List.all().splice(i,1);
        let taskDiv = document.getElementById(id);
        taskDiv.parentNode.removeChild(taskDiv);
        let dropdown = document.getElementById(`list${id}`)
        dropdown.parentNode.removeChild(dropdown);
      }
    }
  }
}
