import React from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const[formData,setFormData]=React.useState({
    text:"",
    category:categories[0],
  })
  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(formData)

  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category"value={formData.category} onChange={handleChange}>
          {categories.map((category)=>(
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
