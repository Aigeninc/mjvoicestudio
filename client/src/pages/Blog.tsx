import { useQuery } from "@tanstack/react-query";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PageHeader } from "@/components/blog/PageHeader";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Vocal Tips Blog" 
        description="Expert advice and tips to help you improve your singing"
      />
      
      <main className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="h-48 bg-gray-100 rounded-lg animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load blog posts
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
