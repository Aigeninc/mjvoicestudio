import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-gray-600">{description}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
