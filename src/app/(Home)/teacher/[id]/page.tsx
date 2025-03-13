import { getUser } from "@/Utils/getUser";
import { auth } from "@/auth";
import TeacherProfile from "@/components/Teacher/TeacherProfile";
import React from "react";

const TeacherPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let user;
  const tokennUser = await getUser();
  if (tokennUser) user = tokennUser;
  else {
    user = await auth();
  }
  return (
    <div className="">
      <TeacherProfile id={id} isLoggedIn={user ? true : false} />
    </div>
  );
};

export default TeacherPage;
