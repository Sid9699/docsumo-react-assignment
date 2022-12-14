import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, updateUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      {user && <div>Hello, {user.user.full_name}</div>}
      <button onClick={() => updateUser(null)}>Log Out</button>
    </>
  );
};

export default Dashboard;
