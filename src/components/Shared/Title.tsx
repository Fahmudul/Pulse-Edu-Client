import React from "react";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h3 className={`text-3xl font-bold text-primary text-center ${className}`}>
      {title}
    </h3>
  );
};

export default Title;
