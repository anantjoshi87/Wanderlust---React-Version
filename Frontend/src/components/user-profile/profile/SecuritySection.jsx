import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Shield } from "lucide-react";

const SecuritySection = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <CardTitle>Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium text-sm">Password</h5>
              <p className="text-xs text-muted-foreground">
                Last changed 3 months ago
              </p>
            </div>
            <Button variant="outline" size="sm">
              Update
            </Button>
          </div>
          <div className="w-full h-px bg-border"></div>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium text-sm">Two-Factor Auth</h5>
              <p className="text-xs text-green-600 font-medium">Enabled</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySection;
