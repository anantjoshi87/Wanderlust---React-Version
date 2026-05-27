import { cn } from "@/lib/utils";
import React from "react";

export const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm p-4",
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export const CardHeader = ({ className, ...props }) => {
  return <div className={cn("mb-4", className)} {...props} />;
};

export const CardTitle = ({ className, ...props }) => {
  return (
    <h3
      className={cn("text-xl font-semibold text-gray-900", className)}
      {...props}
    />
  );
};

export const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-gray-500", className)}
        {...props}
      />
    );
  },
);

CardDescription.displayName = "CardDescription";

export const CardContent = ({ className, ...props }) => {
  return <div className={cn(className)} {...props} />;
};

export const CardFooter = ({ className, ...props }) => {
  return <div className={cn("mt-4 flex items-center", className)} {...props} />;
};
