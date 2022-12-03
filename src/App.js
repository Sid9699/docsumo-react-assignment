import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ToastNotification from "./components/ToastNotification";

function App() {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      setTimeout(() => setToast(null), 3000);
    }
  }, [toast]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Dashboard user={user} updateUser={setUser} />}
        />
        <Route
          path="/login"
          element={
            <Login user={user} updateUser={setUser} updateToast={setToast} />
          }
        />
      </Routes>
      {toast && (
        <ToastNotification
          title={toast.title}
          description={toast.description}
          type={toast.type}
        />
      )}
    </>
  );
}

export default App;
