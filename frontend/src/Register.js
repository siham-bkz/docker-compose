import React, { useState } from "react";

function Register() {
	  const [name, setName] = useState("");
	  const [email, setEmail] = useState("");
	  const [password, setPassword] = useState("");

	  const handleSubmit = async (e) => {
		      e.preventDefault();

		      const res = await fetch("http://localhost:5000/api/users/register", {
			            method: "POST",
			            headers: { "Content-Type": "application/json" },
			            body: JSON.stringify({ name, email, password }),
			          });

		      const data = await res.json();
		      alert(data.message);
		    };

	  return (
		      <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
		        <h2>Register</h2>

		        <input
		          placeholder="Name"
		          value={name}
		          onChange={(e) => setName(e.target.value)}
		        /><br /><br />

		        <input
		          placeholder="Email"
		          value={email}
		          onChange={(e) => setEmail(e.target.value)}
		        /><br /><br />

		        <input
		          type="password"
		          placeholder="Password"
		          value={password}
		          onChange={(e) => setPassword(e.target.value)}
		        /><br /><br />

		        <button type="submit">Sign Up</button>
		      </form>
		    );
}

export default Register;

