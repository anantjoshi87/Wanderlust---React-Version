import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function AuthMenu() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Link
      to="/user"
      state={{
        from: location.pathname,
      }}
    >
      <Avatar className={"cursor-pointer"}>
        {user.profile_photo ? (
          <AvatarImage src={user.profile_photo} />
        ) : (
          <AvatarFallback className="bg-black text-white">
            {user.username.slice(0, 1)}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
}
