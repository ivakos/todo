import React, { useState } from 'react';
import { Button, Input, List, Checkbox } from 'antd';

const TaskItem = ({
  task,
  handleDeleteTask,
  handleEditTodo,
  handleToggleTask,
}) => {

  const [edit, setEdit] = useState('');

  const handleTaskChange = (e) => {
    setEdit(e.target.value);
  };

  const handleSubmitEdit = () => {
    if (!task.isCompleted) {
      setEdit(task.text);
      handleEditTodo(task._id, edit, task.isEdit);
    } 
  };

  return (
    <List.Item
      actions={[
        <Checkbox
          checked={task.isCompleted}
          onChange={() => {
            if (!task.isEdit) {
              handleToggleTask(task._id, task.isCompleted);
            }
          }}
        />,
        <Button
          onClick={handleSubmitEdit}
          style={{
            color: '#727077',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          {!task.isCompleted && task.isEdit ? 'Save' : 'Edit'}
        </Button>,
        <Button
          danger
          onClick={() => handleDeleteTask(task._id)}
          style={{
            backgroundColor: 'rgba(250, 0, 0, 0.2)',
            borderColor: 'rgba(250, 0, 0, 0.3)',
          }}
        >
          Delete
        </Button>,
      ]}
      style={{
        textAlign: 'left',
        wordBreak: 'break-word',
        marginBottom: '15px',
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? '#727077' : '#04202C',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: task.isCompleted
          ? 'rgba(0, 220, 0, 0.15)'
          : 'rgba(233, 151, 135, 0.5)',
        fontSize: '16px',
      }}
    >
      {task.isEdit && !task.isCompleted ? (
        <Input.TextArea autoSize={true} value={edit} onChange={handleTaskChange}></Input.TextArea>
      ) : (
        task.text
      )}
    </List.Item>
  );
};

export default TaskItem;
