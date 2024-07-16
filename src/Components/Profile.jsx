// src/Components/Profile.js
import React, { useEffect, useState } from 'react';
import { dummyUsers } from './dummyData';

const Profile = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const handleChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b-4 border-blue-500 pb-4">
        <h2 className="text-2xl font-bold">Profile Data</h2>
        <button onClick={handleLogout} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Date of Birth</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">
                {editingUser && editingUser.id === user.id ? (
                  <input type="text" name="name" value={editingUser.name} onChange={handleChange} className="border p-1" />
                ) : (
                  user.name
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUser && editingUser.id === user.id ? (
                  <input type="email" name="email" value={editingUser.email} onChange={handleChange} className="border p-1" />
                ) : (
                  user.email
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUser && editingUser.id === user.id ? (
                  <input type="text" name="phone" value={editingUser.phone} onChange={handleChange} className="border p-1" />
                ) : (
                  user.phone
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUser && editingUser.id === user.id ? (
                  <select name="gender" value={editingUser.gender} onChange={handleChange} className="border p-1">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  user.gender
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUser && editingUser.id === user.id ? (
                  <input type="date" name="dob" value={editingUser.dob} onChange={handleChange} className="border p-1" />
                ) : (
                  user.dob
                )}
              </td>
              <td className="border px-4 py-2 flex space-x-2 items-center">
                {editingUser && editingUser.id === user.id ? (
                  <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Save</button>
                ) : (
                  <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                )}
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
