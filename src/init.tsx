import AppRouter from "./appRouter";
import AuthRouter from "./authRouter";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { LoadingContext } from "./contexts/LoadingContext";

const UseRoute = () => {
  const {user} = useContext(AuthContext);
  return user ? <AppRouter /> : <AuthRouter />;
}

export default function InıtApp() {
  return <UseRoute />;
}
