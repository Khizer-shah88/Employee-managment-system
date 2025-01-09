import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask += 1;
      }
    });

    setUserData(data);

    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-5">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Task Title</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Make a UI design"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Assign To</label>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Employee name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Design, dev, etc."
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task details..."
          ></textarea>
        </div>
        <div className="col-span-2">
          <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-medium px-4 py-2 rounded-lg shadow-md">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
