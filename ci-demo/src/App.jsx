import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>CI/CD Demo</h1>
      {!user ? (
        <button onClick={() => setUser("manager")}>Login</button>
      ) : (
        <h2>Welcome {user}, HAVE FUN GUYS</h2>
      )}
    </div>
  );
}

export default App;
