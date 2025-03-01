export type TUserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};
export type FormDataType = {
  title: string;
  liveLink: string;
  githubLink: string;
  description: string;
  image: File | string;
  techStack: string[];
  projectTypes: string[];
};
export type BlogDataType = {
  title: string;
  description: string;
  image: File | string;
  category: string;
  content: string;
  createdAt?: string;
  _id?: string;
  email?: string;
};

// Antd Table Props
export interface DataType {
  key: string;
  email: string;
  postedOn: string;
  title: string;
  category: string;
}

export interface IProjectDataType {
  key: string;
  description: string;
  liveLink: string;
  postedOn: string;
  title: string;
  category: string;
}

export interface IMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
  createdAt?: string;
}
export type TProject = {
  _id: string;
  title: string;
  liveLink: string;
  githubLink: string;
  description: string;
  image: string;
  techStack: string[];
  projectTypes: string[];
  createdAt: string;
  updatedAt: string;
};
