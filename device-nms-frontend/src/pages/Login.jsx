import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { username, password });
      console.log("Login response:", res.data);

      if (res.data === "SUCCESS") {
        onLogin?.(username, password); // pass credentials
        navigate("/devices");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Make sure backend is running.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-lg rounded w-80">
        <h2 className="text-2xl mb-4 font-bold text-purple-600 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-purple-300 p-2 mb-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-purple-300 p-2 mb-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 w-full rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
