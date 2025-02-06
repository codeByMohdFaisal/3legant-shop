import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import HomePage1 from "./pages/home-page-1/HomePage1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home-page-1" element={<HomePage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
