import { useContext } from "react";
import { AuthContext } from "../context/ContextBase";

export const useAuth = () => useContext(AuthContext);
