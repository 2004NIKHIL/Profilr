import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleGenerate = () => {
    // Extract username if they pasted a full github URL, otherwise use as-is
    let targetUser = username.trim();
    if (targetUser.includes("github.com/")) {
      targetUser = targetUser.split("github.com/")[1].split("/")[0];
    }
    
    if (targetUser) {
      navigate(`/profile/${targetUser}`);
    }
  };

  return (
    <div className="nav-shell">
      <div className="nav-border">
        <nav className="nav">
          <div className="brand">
            <div className="nav-logo">Pr</div>
            <span className="brand-name">
              <span className="white-text">Profil</span>
              <span className="green-text">r.</span>
            </span>
          </div>

          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="nav-right">
            <button className="nav-btn">Get Started</button>
          </div>
        </nav>
      </div>

      <div className="pill">
        <div className="dot"></div>
        Your GitHub, finally impressive
      </div>

      <div className="pill-copy">
        <span className="pill-copy-title">One link.</span>
        <span className="pill-copy-subtitle">Your Whole Story.</span>
      </div>
      <form 
        className="git-input" 
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate();
        }}
      >
        <input
          type="text"
          placeholder="github.com/your-username"
          aria-label="GitHub username or URL"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Generate →</button>
      </form>
    </div>
  );
}

export default Navbar;
