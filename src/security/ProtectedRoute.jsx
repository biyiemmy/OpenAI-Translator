import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Navigate
              to={{ path: "/login", state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
