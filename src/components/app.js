class App {
  //your code here!
  constructor() {

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

    })
  }

  deleteList() {

  }
}
