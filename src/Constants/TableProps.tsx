// "use client"
import { ActionDropdown } from "@/components/ActionDropDown";
import { DataType, IProjectDataType } from "@/types/global";
import { Space, TableProps } from "antd";

export const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <span style={{ color: "#fee5b5", width: "100%" }}>{text}</span>
    ),
  },
  {
    title: "Posted On",
    dataIndex: "postedOn",
    key: "postedOn",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <span style={{ color: "#fee5b5" }}>{text}</span>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <span style={{ color: "#fee5b5" }}>{text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <ActionDropdown record={record} type={"blog"} />
      </Space>
    ),
  },
];

export const projectColumns: TableProps<IProjectDataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <span style={{ color: "#fee5b5" }}>{text}</span>,
  },
  {
    title: "Posted On",
    dataIndex: "postedOn",
    key: "postedOn",
  },
  {
    title: "Live Link",
    dataIndex: "liveLink",
    key: "liveLink",
    render: (text) => (
      <span style={{ color: "#fee5b5", width: "100%" }}>{text}</span>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <span style={{ color: "#fee5b5" }}>{text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <ActionDropdown record={record} type={"project"} />
      </Space>
    ),
  },
];
