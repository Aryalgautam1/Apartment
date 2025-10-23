// Loading Skeletons - Show placeholder UI while content loads
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

// Card skeleton for amenities, testimonials, etc.
export const CardSkeleton = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center text-center space-y-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </Card>
);

// Floor plan card skeleton
export const FloorPlanSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-64 w-full" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="grid grid-cols-2 gap-4 pt-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="flex gap-3 pt-4">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 flex-1" />
      </div>
    </div>
  </Card>
);

// Testimonial skeleton
export const TestimonialSkeleton = () => (
  <Card className="p-6">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-5 w-5" />
      ))}
    </div>
    <div className="space-y-2 mb-6">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
    <div className="flex items-center gap-3 pt-4 border-t">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  </Card>
);

// Hero section skeleton
export const HeroSkeleton = () => (
  <div className="h-[600px] flex items-center justify-center bg-muted">
    <div className="container mx-auto px-4 text-center space-y-6">
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  </div>
);

// Form skeleton
export const FormSkeleton = () => (
  <div className="space-y-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
    ))}
    <Skeleton className="h-12 w-full" />
  </div>
);

// Page loading component
export const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

