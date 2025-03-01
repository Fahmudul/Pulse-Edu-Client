import React from "react";

const PrimaryContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`bg-primaryPro ${className}`}>{children}</div>;
};

export default PrimaryContainer;
