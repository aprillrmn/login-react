// src/dummyData.js
export let dummyUsers = [
  { id: 1, name: 'Adit', email: 'adit@gmail.com', phone: '123456789', gender: 'Male', dob: '1990-01-01' },
  { id: 2, name: 'Budi', email: 'budi@gmail.com', phone: '987654321', gender: 'Male', dob: '1992-02-02' },
  // Tambahkan data dummy lainnya jika diperlukan
];

export const addUser = (email, password) => {
  const newUser = { id: dummyUsers.length + 1, email, password, name: '', phone: '', gender: '', dob: '' };
  dummyUsers.push(newUser);
};
