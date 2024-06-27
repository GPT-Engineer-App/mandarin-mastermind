import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-2xl mx-4 bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">My Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none text-gray-900 dark:text-gray-100">
            <h2>Welcome to My Blog</h2>
            <p>
              This is a basic blog page with a title and content area. You can start writing your blog posts here.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec sem feugiat, a tincidunt nisi fermentum. 
              Donec ac orci condimentum, varius justo at, luctus nisi. Sed sit amet sapien ut nunc cursus tincidunt. 
              Integer nec magna nec lorem tincidunt tincidunt. 
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;