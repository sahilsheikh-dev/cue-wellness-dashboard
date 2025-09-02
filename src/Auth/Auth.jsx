import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Auth() {
  return (
    // <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
    // </Router>
  );
}
