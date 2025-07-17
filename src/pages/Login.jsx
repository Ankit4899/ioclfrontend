// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post('http://localhost:8080/api/users/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       alert('Login failed');
//     }
//   };
//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-xl mb-4">Login</h1>
//       <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
//       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" />
//       <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mb-2">Login</button>
//       <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
//     </div>
//   );
// }
// export default Login;

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       // const res = await axios.post("http://localhost:8080/api/users/login", {
//       //   email,
//       //   password,
//       // });
//       const baseURL = import.meta.env.VITE_API_URL;
// const res = await axios.post(`${baseURL}/api/users/login`, {
//   email,
//   password,
// });
      
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Login failed");
//     }
//   };
const handleLogin = async () => {
  try {
    const baseURL = import.meta.env.VITE_API_URL;
    const res = await axios.post(`${baseURL}/api/users/login`, {
      email,
      password,
    });

    console.log("Login response:", res.data);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    alert("Login failed: " + (err.response?.data?.message || "Check console"));
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        backgroundImage:
          "linear-gradient(rgba(11, 61, 145, 0.85), rgba(11, 61, 145, 0.85)), url('/refinery.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: "1rem",
          padding: "2.5rem",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/logo.jpg"
          alt="Indian Oil Logo"
          style={{ height: "56px", marginBottom: "2rem" }}
        />

        <h2
          style={{
            color: "#0B3D91",
            fontWeight: "700",
            fontSize: "2.5rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Login to Your Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            outlineColor: "#FF6200",
            fontSize: "1rem",
            width: "100%",
            marginBottom: "1.5rem",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            outlineColor: "#FF6200",
            fontSize: "1rem",
            width: "100%",
            marginBottom: "1.5rem",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#FF6200",
            color: "white",
            padding: "0.85rem",
            fontWeight: "700",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            fontSize: "1.1rem",
            width: "100%",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e05500")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FF6200")}
        >
          Login
        </button>

        <p style={{ marginTop: "1.5rem", color: "#555", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#0B3D91", fontWeight: "600", textDecoration: "underline" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
