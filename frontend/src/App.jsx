import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
