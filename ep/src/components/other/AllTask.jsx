import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
      <div className="grid grid-cols-5 gap-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-3 px-4 rounded-lg mb-4">
        <div>Employee Name</div>
        <div>New Task</div>
        <div>Active Task</div>
        <div>Completed</div>
        <div>Failed</div>
      </div>
      {userData.map((elem, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 gap-4 border border-gray-200 py-3 px-4 rounded-lg mb-2 shadow-sm hover:shadow-md transition"
        >
          <div className="font-medium">{elem.firstName}</div>
          <div className="text-blue-500">{elem.taskCounts.newTask}</div>
          <div className="text-yellow-500">{elem.taskCounts.active}</div>
          <div className="text-green-500">{elem.taskCounts.completed}</div>
          <div className="text-red-500">{elem.taskCounts.failed}</div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
