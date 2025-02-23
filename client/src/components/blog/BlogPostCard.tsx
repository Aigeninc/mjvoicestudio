import { motion } from "framer-motion";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <h2 className="text-xl font-semibold">
            <a 
              href={`/blog/${post.slug}`} 
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </a>
          </h2>
          <p className="text-sm text-gray-500">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{post.excerpt}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
