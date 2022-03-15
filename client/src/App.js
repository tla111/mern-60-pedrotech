import './App.css';
import { useState } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    { id: 1, name: "Pedro", age: 20, username: "PedroTech" }
  ]);

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
