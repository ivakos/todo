import React from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  handleDeleteTask,
  handleToggleTask,
  handleEditTodo,
}) => {
  return (
    <List
      className="list"
      locale={{ emptyText: 'No tasks' }}
      pagination={
        tasks.length > 7
          ? {
              pageSize: 7,
              align: 'center',
            }
          : false
      }
      align={'center'}
      dataSource={tasks}
      style={{
        marginTop: '10px',
        width: '100%',
      }}
      renderItem={(task) => (
        <TaskItem
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleToggleTask={handleToggleTask}
          handleEditTodo={handleEditTodo}
        />
      )}
    />
  );
};

export default TaskList;
