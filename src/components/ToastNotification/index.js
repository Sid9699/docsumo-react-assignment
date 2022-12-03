import React from "react";
import "./ToastNotification.css";

const ToastNotification = ({ title, description, type = "success" }) => {
  return (
    <div className={`toast toast-${type}`}>
      <h6>{title}</h6>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ToastNotification;
