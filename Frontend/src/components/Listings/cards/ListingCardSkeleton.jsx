import { Skeleton } from "@/components/ui/skeleton";

const ListingCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-64 w-full rounded-xl" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
};

export default ListingCardSkeleton;