import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Login from "@/pages/auth/Login";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link to="/login">
        <Login/>
      </Link>

      <Link to="/register">
        <Button className="rounded-full px-5">Sign Up</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;