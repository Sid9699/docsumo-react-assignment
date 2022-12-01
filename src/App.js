import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;
