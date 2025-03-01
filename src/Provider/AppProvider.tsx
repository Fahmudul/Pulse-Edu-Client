"use client";
import UserProvider from "@/Context/UserContext";
import { AppStore, makeStore } from "@/Redux/store";

import React, { useRef } from "react";
import { Provider } from "react-redux";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<AppStore | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  // useEffect(() => {});
  if (!ref.current) {
    ref.current = makeStore();
  }

  return (
    <UserProvider>
      <Provider store={ref.current}>{children}</Provider>;
    </UserProvider>
  );
};
export default AppProvider;
