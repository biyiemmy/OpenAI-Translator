import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const useAuth = () => {
  const [user, setUser] = useState({ loggedIn: false });

  const login = () => {
    setUser({ loggedIn: true });
  };

  return { user, login };
};

// const ProtectedRoute = () => {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Navigate to="/main " />;
// };

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuth = useAuth();
  return isAuth ? <Element /> : <Navigate to="/register" replace />;
};

export default ProtectedRoute;
