//

import { useState } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${userName}, Email: ${email}, Password: ${password}`);
  };
  return (
    <div>
      <h1>useState Practice</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
          required
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
