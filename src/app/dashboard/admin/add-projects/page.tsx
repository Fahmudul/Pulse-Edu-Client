import AddProjectForm from "@/components/AddProjectForm";
import ProjectTable from "@/components/ProjectTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const AddProject = () => {
  return (
    <div style={{ backgroundColor: "#131f22" }} className="min-h-screen p-6">
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="max-w-6xl mx-auto rounded-lg  min-h-[calc(100vh-100px)] p-10"
      >
        <Tabs defaultValue="account" className="w-full h-full">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger value="account">Create Project</TabsTrigger>
            <TabsTrigger value="password">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="h-full">
            <h2
              style={{ color: "#fee5b5" }}
              className="text-2xl font-bold mb-6 text-center"
            >
              Add New Project
            </h2>
            <AddProjectForm />
          </TabsContent>
          <TabsContent value="password" className="h-full">
            <ProjectTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AddProject;
