import React, { useState } from 'react';
import { Input, Button } from 'antd';

const TaskForm = ({ handleAddTask }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task) {
      handleAddTask(task);
      setTask('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        paddingBottom: '30px',
      }}
    >
      <Input
        value={task}
        onPressEnter={handleSubmit}
        onChange={handleTaskChange}
        placeholder="Enter a task"
        style={{
          borderColor: '#727077',
        }}
      />
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{
          backgroundColor: '#A49592',
        }}
      >
        Add Task
      </Button>
    </div>
  );
};

export default TaskForm;
