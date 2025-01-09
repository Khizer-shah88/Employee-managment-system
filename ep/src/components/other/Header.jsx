import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white">
        Hello <br />
        <span className="text-4xl font-extrabold text-yellow-300">username 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 transition text-white font-medium px-6 py-2 rounded-lg shadow-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
