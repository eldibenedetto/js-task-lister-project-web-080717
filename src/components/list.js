/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  let allLists = [];
  return class List {
    constructor(title) {
      this.id = id
      id ++
      this.title = title
      this.tasks = []
      allLists.push(this);
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
    }

    addTaskToList(description, priority) {
      this.tasks.push(new Task(description, priority))
    }

    render() {
      return `<div id="${this.id}">
      <h2>${this.title}</h2>
        <ul>
        ${this.tasks.map(function(task){
          return task.render();
        }
      ).join('')
      }
        </ul>
        <br>
        <button class="deleteList" id="${this.id}">delete</button>
      </div>`
    }

    renderDropdown(){
      return `<option value= ${this.id} id="list${this.id}">${this.title}</option>`
    }

    static all(){
      return allLists;
    }
  }

})()
