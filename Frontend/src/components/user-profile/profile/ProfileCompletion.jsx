import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompletionBar } from "@/components/common/CompletionBar";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const ProfileCompletion = () => {
  return (
    <div>
      <Card className="bg-primary/5 border-primary/10 shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between">
            Profile Completion
            <span className="text-primary text-xl">85%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CompletionBar value={85} />
          <p className="text-xs text-muted-foreground mt-3 mb-4">
            Complete your profile to build trust with other users and get more
            bookings.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span className="text-muted-foreground line-through">
                Verify email address
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span className="text-muted-foreground line-through">
                Upload profile picture
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm group cursor-pointer">
              <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 shrink-0 group-hover:bg-primary/20 transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                Connect social media accounts
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm group cursor-pointer">
              <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 shrink-0 group-hover:bg-primary/20 transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                Add emergency contact
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCompletion;
