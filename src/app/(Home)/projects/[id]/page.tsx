import React from "react";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/get-single-project/${id}`
  );
  const result = await res.json();
  console.log(result);
  const project = result.data;

  return <ProjectDetailsCard project={project} />;
};

export default ProjectDetails;
