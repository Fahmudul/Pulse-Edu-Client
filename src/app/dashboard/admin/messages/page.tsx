"use client";
import React, { useState } from "react";
import moment from "moment";
import {
  Mail,
  Star,
  Trash2,
  Archive,
  Clock,
  X,
  Search,
  MoreVertical,
} from "lucide-react";
import { useGetAllMessagesQuery } from "@/Redux/Features/MessageApi/Message.api";
import { IMessage } from "@/types/global";

const MessageComponent = () => {
  const [selectedMessage, setSelectedMessage] = useState<IMessage>();
  const [showModal, setShowModal] = useState(false);

  const { data } = useGetAllMessagesQuery(undefined);
  const messages = data?.data;
  console.log(messages);
  // Sample message data
  // const messages = [
  //   {
  //     id: 1,
  //     sender: "John Doe",
  //     subject: "Project Collaboration",
  //     content:
  //       "Hi there! I came across your portfolio and I'm really impressed with your work. I'd love to discuss a potential collaboration on an upcoming project. The project involves developing a modern web application with React and Node.js. Let me know if you'd be interested in discussing this further. Best regards, John",
  //     time: "10:30 AM",
  //     unread: true,
  //     starred: false,
  //   },
  //   {
  //     id: 2,
  //     sender: "Alice Smith",
  //     subject: "Frontend Developer Position",
  //     content:
  //       "Dear Developer, We have an exciting opportunity for a Frontend Developer position at our company. Based on your portfolio, we believe you would be a great fit for our team. The role involves working with modern technologies and frameworks. Would you be interested in discussing this opportunity? Best, Alice",
  //     time: "Yesterday",
  //     unread: false,
  //     starred: true,
  //   },
  //   {
  //     id: 3,
  //     sender: "Tech Conference",
  //     subject: "Speaking Invitation",
  //     content:
  //       "We would like to invite you to speak at our upcoming tech conference. Your expertise in web development would be valuable to our audience. The conference will be held virtually next month. Please let us know if you're interested in participating. Regards, Conference Team",
  //     time: "2 days ago",
  //     unread: false,
  //     starred: false,
  //   },
  // ];

  const handleMessageClick = async (message: IMessage) => {
    console.log(message);
    setSelectedMessage(message);
    setShowModal(true);
  };

  return (
    <div style={{ backgroundColor: "#131f22" }} className="max-h-screen p-4">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <div
          style={{ backgroundColor: "#1a292c" }}
          className="flex items-center rounded-lg p-2"
        >
          <Search style={{ color: "#fee5b5" }} className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search messages..."
            style={{
              backgroundColor: "#1a292c",
              color: "#fee5b5",
            }}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Messages List */}
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="rounded-lg max-h-[calc(100vh-160px)] overflow-auto"
      >
        {messages?.map((message: IMessage, idx: number) => (
          <div
            key={idx}
            onClick={() => handleMessageClick(message)}
            style={{ borderColor: "#131f22" }}
            className={`p-4 border-b cursor-pointer hover:opacity-90 transition-opacity flex items-center font-semibold`}
          >
            <div style={{ color: "#fee5b5" }} className="flex-shrink-0 mr-4">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-grow" style={{ color: "#fee5b5" }}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">
                  {message.firstName + " " + message.lastName}
                </span>
                <span className="text-sm opacity-75">
                  {moment(message.createdAt).format("LT")}
                </span>
              </div>
              <div className="text-sm">{message.subject}</div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <button
                style={{ color: "#fee5b5" }}
                className="opacity-60 hover:opacity-100"
              >
                <Star className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            style={{ backgroundColor: "#1a292c" }}
            className="w-full max-w-2xl rounded-lg shadow-lg"
          >
            {/* Modal Header */}
            <div
              className="p-4 flex justify-between items-center border-b"
              style={{ borderColor: "#131f22" }}
            >
              <h2 style={{ color: "#fee5b5" }} className="text-xl font-bold">
                {selectedMessage.subject}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                style={{ color: "#fee5b5" }}
                className="hover:opacity-75"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3
                    style={{ color: "#fee5b5" }}
                    className="font-bold text-lg mb-1"
                  >
                    {selectedMessage.firstName + " " + selectedMessage.lastName}
                  </h3>
                  <div
                    style={{ color: "#fee5b5" }}
                    className="flex items-center text-sm opacity-75"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {moment(selectedMessage.createdAt).format("LT")}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    style={{ color: "#fee5b5" }}
                    className="hover:opacity-75"
                  >
                    <Archive className="w-5 h-5" />
                  </button>
                  <button
                    style={{ color: "#fee5b5" }}
                    className="hover:opacity-75"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button
                    style={{ color: "#fee5b5" }}
                    className="hover:opacity-75"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div
                style={{ color: "#fee5b5" }}
                className="text-base leading-relaxed"
              >
                {selectedMessage.message}
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className="p-4 border-t flex justify-end"
              style={{ borderColor: "#131f22" }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
                className="px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      {/* <div className="mt-6 flex justify-center items-center space-x-4">
        <button style={{ color: "#fee5b5" }} className="hover:opacity-75">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span style={{ color: "#fee5b5" }} className="text-sm">
          Page 1 of 1
        </span>
        <button style={{ color: "#fee5b5" }} className="hover:opacity-75">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div> */}
    </div>
  );
};

export default MessageComponent;
