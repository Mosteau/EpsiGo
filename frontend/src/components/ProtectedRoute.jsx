import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return user ? children : null;
}

export default ProtectedRoute;
