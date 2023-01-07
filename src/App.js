import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 3:30pm',
        reminder: false,
    },
  ])

  // Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder Function
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'You\'ve completed all your tasks.'}
    </div>
  );
}

export default App;
