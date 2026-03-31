import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link to="/login">
        <Button variant="ghost">Login</Button>
      </Link>

      <Link to="/register">
        <Button className="rounded-full px-5">Sign Up</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;