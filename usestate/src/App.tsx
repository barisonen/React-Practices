import React, { useState } from 'react';

interface User {
  name?: string;
  surname?: string;
  age?: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentUser({ ...currentUser, name: event.target.value });
  };

  const handleSurnameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentUser({ ...currentUser, surname: event.target.value });
  };

  const handleAgeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser({ ...currentUser, age: event.target.valueAsNumber });
  };

  const addUser = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setUsers([...users, currentUser!]);
    setCurrentUser({ name: '', surname: '', age: undefined });
  };

  return (
    <div className='app'>
      <div
        className='main-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '100px',
        }}
      >
        <div
          className='user-panel'
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: 'solid',
          }}
        >
          <h4>Users</h4>
          <ul>
            {users ? (
              users.map((user) => {
                return (
                  <li>
                    {user.name} &nbsp; {user.surname} &nbsp; {user.age}
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div
          className='form-panel'
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: 'solid',
          }}
        >
          <label>
            Name
            <br />
            <input
              type='text'
              onChange={handleNameInputChange}
              value={currentUser?.name}
            />
          </label>
          <br />
          <label>
            Surname:
            <br />
            <input
              type='text'
              onChange={handleSurnameInputChange}
              value={currentUser?.surname}
            />
          </label>
          <br />
          <label>
            Age:
            <br />
            <input
              type='number'
              onChange={handleAgeInputChange}
              value={currentUser?.age || ''}
            />
          </label>
          <br />
          <button onClick={addUser}>Add</button>
          <h2>Current User</h2>
          <p>Name: {currentUser?.name}</p>
          <p>Surname: {currentUser?.surname}</p>
          <p>Age: {currentUser?.age}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
