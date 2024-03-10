import { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTask('')
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
  }

  function moveTaskUp(index) {
    if (index > 0) {
      // eslint-disable-next-line prettier/prettier
      const updatedTasks = [...tasks];
      // eslint-disable-next-line prettier/prettier
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index]
      ]

      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      // eslint-disable-next-line prettier/prettier
      const updatedTasks = [...tasks];
      // eslint-disable-next-line prettier/prettier
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index]
      ]

      setTasks(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>to-do-list</h1>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  )
}

export default ToDoList
