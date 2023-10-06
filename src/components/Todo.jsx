import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';

function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddTask = (content) => {
    axios
      .post('http://localhost:3000/tasks', {
        text: content,
        isCompleted: false,
        isEdit: false,
      })
      .then((response) => {
        console.log();
        setTasks([response.data, ...tasks]);
      });
  };

  const handleDeleteTask = (id) => {
    const url = 'http://localhost:3000/tasks/' + id;
    axios.delete(url).then((response) => {
      console.log(response);
    });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleEditTodo = (id, newContent, isEdit) => {
    const url = 'http://localhost:3000/tasks/' + id;
    if(!isEdit) {
      axios.put(url, { text: newContent, isEdit: !isEdit }).then((response) => {
        console.log(response);
      });
    }
    setTasks(
      tasks.map((task) =>
        task._id === id
          ? { ...task, text: newContent, isEdit: !task.isEdit }
          : task
      )
    );
  };

  const handleToggleTask = (id, isCompleted) => {
    const url = 'http://localhost:3000/tasks/' + id;
      axios.put(url, { isCompleted: !isCompleted }).then((response) => {
        console.log(response);
      });
    setTasks(
      tasks.map((task) =>
        task._id === id
          ? { ...task, isCompleted: !isCompleted }
          : task
      )
    );
  };

  return (
    <div
      style={{
        margin: ' 0 auto',
        padding: '30px 10px',
        maxWidth: '800px',
      }}
    >
      <h1
        style={{
          color: '#E99787',
          textAlign: 'center',
          paddingBottom: '30px',
        }}
      >
        Todo List
      </h1>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default Todo;
