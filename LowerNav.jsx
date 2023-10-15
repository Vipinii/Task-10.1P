import React, { useState } from "react";
import "./LowerNav.css";

function LowerNav() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        // Email sent successfully
        alert("Email sent successfully!");
      } else {
        // Handle errors
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <nav className="navbar bg-grey" style={{ marginBottom: "10px" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white font-weight-bold" style={{ fontSize: "30px", fontWeight: "bold" }}>
          SIGN UP FOR OUR DAILY INSIDER
        </a>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="button-style" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}

export default LowerNav;
