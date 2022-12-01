import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => setUser(null)}>Log Out</button>
    </>
  );
};

export default Dashboard;
