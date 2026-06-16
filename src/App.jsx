import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
