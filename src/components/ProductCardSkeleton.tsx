export default function ProductCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="w-full h-48 bg-gray-200 rounded-md animate-pulse"></div>
      <div className="mt-4">
        <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}