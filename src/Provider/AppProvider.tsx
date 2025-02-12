"use client";
import { store } from "@/Redux/store";
import { SessionProvider } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  });
  return (
    <SessionProvider>
      <Provider store={store}>{visible && children}</Provider>
    </SessionProvider>
  );
};
export default AppProvider;
