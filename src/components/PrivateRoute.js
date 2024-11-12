import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Router = useRouter();
  const { token } = useSelector((state) => state?.userData);
  useEffect(() => {
    const loginToken = token;
    if (loginToken) {
      setIsAuthenticated(true);
    } else {
      Router.push("/login");
    }
  }, [Router,token]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
