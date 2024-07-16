// src/Components/Register.js
import React, { useState } from 'react';
import '../App.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    nama: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password) {
      alert('Password tidak cocok');
      return;
    }
    alert('Registrasi berhasil');
    onRegister();
  };

  return (
    <div className="register-container">
      <h2>Formulir Registrasi</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default Register;
