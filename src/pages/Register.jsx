// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     try {
//       await axios.post('http://localhost:8080/api/users/register', { name, email, password });
//       alert('Registration successful! Please login.');
//       navigate('/');
//     } catch (err) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-xl mb-4">Register</h1>
//      Name :  <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full mb-2" /><br /><br />
//      Email :  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" /><br /><br />
//       Password : <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" /><br /><br />
//       <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 mb-2">Register</button>
//       <p className="text-sm">Already have an account? <Link to="/" className="text-blue-600">Login</Link></p>
//     </div>
//   );
// }

// export default Register;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:8080/api/users/register", {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/register`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed due to network error");
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
          Create Your Account
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <label
            htmlFor="name"
            style={{ fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              outlineColor: "#FF6200",
              fontSize: "1rem",
              width: "100%",
            }}
          />

          <label
            htmlFor="email"
            style={{ fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
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
            }}
          />

          <label
            htmlFor="password"
            style={{ fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter a secure password"
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
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#FF6200",
              color: "white",
              padding: "0.85rem",
              fontWeight: "700",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e05500")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FF6200")}
          >
            Register
          </button>
        </form>

        <p style={{ marginTop: "1.5rem", color: "#555", textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            to="/"
            style={{ color: "#0B3D91", fontWeight: "600", textDecoration: "underline" }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
