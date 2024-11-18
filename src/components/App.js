import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks]=React.useState(TASKS)
  const[categories,setCategories]= React.useState(CATEGORIES)
    
  const[selectedCategory,setSelectedCategory]=React.useState("All")

 //Deleting Tasks
 function handleDeleteTask(taskIndex) {
  setTasks((prevTasks) =>
    prevTasks.filter((_, index) => index !== taskIndex)
  );
}
  //Filter task based on selected Category
  const filteredTasks=tasks.filter((task)=>(
   selectedCategory === "All" ? true: task.category === selectedCategory
  ))

 //form submission
  const handleTaskFormSubmit = (newTask) => {
   setTasks([...tasks, newTask]);
  };

 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={categories}  onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks}  onDeleteTask={handleDeleteTask}/>
    </div>
  );
}


export default App;
