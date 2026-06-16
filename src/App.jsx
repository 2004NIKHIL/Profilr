import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
