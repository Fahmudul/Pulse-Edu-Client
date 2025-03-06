import TeacherProfile from "@/components/Teacher/TeacherProfile";
import React from "react";

const TeacherPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="">
      <TeacherProfile id={id } />
    </div>
  );
};

export default TeacherPage;
