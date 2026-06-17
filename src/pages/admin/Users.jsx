import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6">Users Info:</h2>

      <div className="hidden sm:block overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-5 font-bold border-b pb-2 mb-3">
            <p>Id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Role</p>
          </div>

          <div className="flex flex-col gap-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-5 p-2 border rounded hover:bg-gray-100"
              >
                <p>{user.id}</p>
                <p className="wrap-break-word">{user.username}</p>
                <p className="wrap-break-word">{user.email}</p>
                <p>{user.role}</p>
                <button
                  onClick={() => handleDelete(user.id)}
                  className={`${user.role === "admin" ? "hidden" : "bg-red-600 p-1 rounded-lg cursor-pointer"}`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col gap-3">
        {users.map((user) => (
          <div key={user.id} className="border rounded p-3 bg-white shadow">
            <p className="font-semibold">Name: {user.username}</p>
            <p className="text-sm">Email: {user.email}</p>
            <p className="text-sm">Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
