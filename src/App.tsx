import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./features/components/Navbar";
import AppRoutes from "./features/routing/routes";
import "./Styles/global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
