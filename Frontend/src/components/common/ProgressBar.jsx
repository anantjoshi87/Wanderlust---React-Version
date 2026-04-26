"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

function ProgressBar({rating}) {
  const [progress, setProgress] = React.useState(13);
  const val = (Number(rating) / 5) * 100;
  

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(val), 500);
    return () => clearTimeout(timer);
  }, [val]);

  return <Progress value={progress} className="w-full h-1 bg-gray-200" />;
}

export default ProgressBar;
