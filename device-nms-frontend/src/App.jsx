import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Devices from "./pages/Devices";

export default function App() {
  const [credentials, setCredentials] = useState(null);

  const handleLogin = (username, password) => {
    setCredentials({ username, password });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          credentials ? (
            <Navigate to="/devices" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/devices"
        element={credentials ? <Devices /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
