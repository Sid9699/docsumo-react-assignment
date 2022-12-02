import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  const updateUser = (user) => setUser(user);

  return (
    <Routes>
      <Route path="/" element={<Dashboard user={user} updateUser={updateUser} />} />
      <Route path="/login" element={<Login user={user} updateUser={updateUser} />} />
    </Routes>
  );
}

export default App;
