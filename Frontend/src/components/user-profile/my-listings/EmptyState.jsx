import { Button } from "@/components/ui/button";
import { Home, Plus } from "lucide-react";
import React from "react";

const EmptyState = ({ activeTab }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white rounded-[32px] border border-border/40 border-dashed">
      <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <Home className="w-12 h-12 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">
        No listings found
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-8 text-base">
        You haven't{" "}
        {activeTab === "All" ? "created any" : `any ${activeTab.toLowerCase()}`}{" "}
        listings yet. Create your first property listing to start earning.
      </p>
      <Button size="lg" className="rounded-xl shadow-md h-12 px-8">
        <Plus className="w-5 h-5 mr-2" />
        Create First Listing
      </Button>
    </div>
  );
};

export default EmptyState;
