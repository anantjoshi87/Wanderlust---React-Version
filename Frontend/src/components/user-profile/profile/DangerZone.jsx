import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import React from "react";

const DangerZone = () => {
  return (
    <div>
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <CardTitle>Danger Zone</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="w-full sm:flex-1 border-destructive/30 text-destructive hover:bg-destructive/10"
            >
              Deactivate
            </Button>

            <Button variant="destructive" className="w-full sm:flex-1">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DangerZone;
