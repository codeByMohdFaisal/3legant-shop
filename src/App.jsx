import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import HomePage from "./pages/home-page/HomePage";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} replace />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/home-page" element={<HomePage />} />
        <Route exact path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
