import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./features/components/Navbar";
import AppRoutes from "./features/routing/routes";
import ThemeToggleButton from "./features/components/ThemeToggleButton";
import SideBarRight from "./features/components/SideBarRight";
import "./Styles/global.css";

const App = () => {
  return (
    <Router basename="/BaltaDev">
      <Navbar />
      <SideBarRight />
      <AppRoutes />
      <ThemeToggleButton />
    </Router>
  );
};

export default App;
