import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
