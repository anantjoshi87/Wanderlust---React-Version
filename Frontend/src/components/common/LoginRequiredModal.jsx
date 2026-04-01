import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function LoginRequiredModal() {
  const navigate = useNavigate();

  const { showLoginModal, setShowLoginModal } = useAuth();

  return (
    <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
      <DialogContent className="sm: max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>You are not logged in</DialogTitle>
          <DialogDescription>Please login to continue</DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={() => setShowLoginModal(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setShowLoginModal(false);
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
