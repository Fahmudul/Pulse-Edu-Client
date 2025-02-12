"use client";
import React from "react";
import { Table } from "antd";
import { useGetAllProjectsQuery } from "@/Redux/Features/ProjectApi/Project.api";
import { projectColumns } from "@/Constants/TableProps";
import { IProjectDataType, TProject } from "@/types/global";

const ProjectTable = () => {
  const { data: newData } = useGetAllProjectsQuery(undefined);
  console.log(newData);
  const projectData: IProjectDataType[] = newData?.data?.map(
    (project: TProject) => ({
      key: project._id,
      title: project.title,
      category: project.projectTypes?.map((item: string) => (
        <span key={item}>{item}, </span>
      )),
      description: project.description,
      liveLink: project.liveLink,
      postedOn: project.createdAt,
    })
  );

  return (
    <div
      className="p-6 min-h-[calc(100vh-25vh)]"
      style={{ backgroundColor: "#131f22" }}
    >
      <Table
        columns={projectColumns}
        dataSource={projectData}
        style={{
          backgroundColor: "#1a292c",
          borderRadius: "8px",
          overflow: "hidden",
          height: "100%",
        }}
        className="custom-table"
      />
    </div>
  );
};

export default ProjectTable;
