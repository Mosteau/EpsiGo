const ProtectedRoute = ({ children }) => {
  // const { user } = useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, [user]);
  // desactivated for now, will be reactivated when the backend is ready for user context

  return children;
};

export default ProtectedRoute;
