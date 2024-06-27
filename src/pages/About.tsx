import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl mx-4">
        <h1 className="text-3xl font-bold text-center mb-4">About</h1>
        <p className="text-center">
          This is the About page. You can add information about yourself or your blog here.
        </p>
      </div>
    </div>
  );
};

export default About;